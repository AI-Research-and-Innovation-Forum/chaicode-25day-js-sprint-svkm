const { execSync } = require('child_process');

// Explicit mapping of known GitHub usernames to their folders
const USER_MAP = {
  'soham156': 'Soham_Chaudhari',
  'chaitalijadhav25': 'Chaitali_Jadhav',
  'deepshah-01': 'Deep_Shah',
  'hassancodeshub': 'Hassan_Shah',
  'kanishka-wani': 'Kanishka_Wani',
  'pranavpatil06': 'Pranav_Patil',
  'yash11101': 'yash-patil',
  'saurabh-rajput-15': 'SAURABH_GIRASE'
};

const repoOwner = (process.env.REPO_OWNER || 'Soham156').toLowerCase();
const prAuthor = (process.env.PR_AUTHOR || '').trim();
const prBranch = (process.env.PR_BRANCH || '').trim();
const baseRef = process.env.GITHUB_BASE_REF || 'main';

// 1. Repo owner bypasses all checks
if (prAuthor && prAuthor.toLowerCase() === repoOwner) {
  console.log(`PR author is repo owner (${prAuthor}). Bypassing all structure checks.`);
  process.exit(0);
}

// 2. Get changed files
let files = [];
if (process.env.CHANGED_FILES) {
  files = process.env.CHANGED_FILES.split(',')
    .map(f => f.trim())
    .filter(Boolean);
} else {
  const base = `origin/${baseRef}`;
  try {
    const filesOutput = execSync(`git diff --name-only ${base}...HEAD`, { encoding: 'utf8' });
    files = filesOutput.trim().split('\n').filter(Boolean);
  } catch (err) {
    console.error(`Failed to get diff using git: ${err.message}`);
    process.exit(1);
  }
}

console.log('Files changed in this PR:');
files.forEach(f => console.log(`  - ${f}`));

// Helper to determine if a file is an allowed global/configuration file
function isAllowedGlobalFile(filePath) {
  const normalizedPath = filePath.replace(/\\/g, '/');
  
  // Allow Github Actions files and script changes (only admins or approved PRs should modify this,
  // but we enforce ownership checks elsewhere or allow them if repoOwner is doing it).
  // Note: Root README.md cannot be changed by students.
  if (normalizedPath.startsWith('.github/')) return true;
  if (normalizedPath === '.gitignore') return true;
  if (normalizedPath === '.gitattributes') return true;
  
  // Any files starting with '.' at the root (like config files)
  if (normalizedPath.startsWith('.') && !normalizedPath.includes('/')) return true;
  
  return false;
}

// Filter files
const studentFiles = files.filter(f => !isAllowedGlobalFile(f));
if (studentFiles.length === 0) {
  console.log('No student-specific files changed. Skipping checks.');
  process.exit(0);
}

const studentDirs = new Set();
const invalidFiles = [];
const dayRegex = /^day[\s_-]?\d{1,2}$/i;

for (const file of studentFiles) {
  const normalized = file.replace(/\\/g, '/');
  const parts = normalized.split('/');
  
  // Files at root are not allowed
  if (parts.length === 1) {
    invalidFiles.push({ file, reason: 'Files must not be placed directly in the root directory.' });
    continue;
  }
  
  const studentDirName = parts[0];
  studentDirs.add(studentDirName);
  
  // Verify student subdirectory structure
  if (parts.length > 2) {
    const subDir = parts[1];
    if (!dayRegex.test(subDir)) {
      invalidFiles.push({
        file,
        reason: `Subdirectory '${subDir}' under '${studentDirName}' is invalid. All day subdirectories must match day folder patterns (e.g., Day_01, Day_1, day1, Day 1, day_1).`
      });
    }
  }
}

// Enforce single student folder modified
if (studentDirs.size > 1) {
  console.error('❌ Validation Error: Changes were made in multiple student directories.');
  console.error('Directories modified:', Array.from(studentDirs).join(', '));
  process.exit(1);
}

// Check for other directory violations
if (invalidFiles.length > 0) {
  console.error('❌ Validation Error: Invalid folder structure or misplaced files detected:');
  for (const item of invalidFiles) {
    console.error(`  - ${item.file}: ${item.reason}`);
  }
  process.exit(1);
}

const targetDir = Array.from(studentDirs)[0];
console.log(`Checking authorization for student directory: '${targetDir}'`);

// Helper to normalize strings for comparison (keeps only alphabetic characters)
function normalizeLetters(str) {
  return str.toLowerCase().replace(/[^a-z]/g, '');
}

// Detect if directory exists in the base branch
let isNewDirectory = false;
try {
  const output = execSync(`git ls-tree -d origin/${baseRef} "${targetDir}"`, { encoding: 'utf8' }).trim();
  if (!output) {
    isNewDirectory = true;
  }
} catch (err) {
  isNewDirectory = true;
}

// Check git history ownership for existing folders
let isOwnerByGitHistory = false;
if (!isNewDirectory) {
  try {
    const gitLog = execSync(`git log --follow --format="%ae %an" -- "${targetDir}"`, { encoding: 'utf8' });
    const logLower = gitLog.toLowerCase();
    if (prAuthor && logLower.includes(prAuthor.toLowerCase())) {
      isOwnerByGitHistory = true;
    }
  } catch (err) {
    // Ignore and fallback
  }
}

let isAuthorized = false;

// 1. Check Explicit Mapping
if (prAuthor) {
  const mappedFolder = USER_MAP[prAuthor.toLowerCase()];
  if (mappedFolder && mappedFolder === targetDir) {
    isAuthorized = true;
    console.log(`Matched PR author '${prAuthor}' to folder '${targetDir}' via USER_MAP.`);
  }
}

// 2. Branch name match
if (!isAuthorized && prBranch) {
  const normBranch = normalizeLetters(prBranch);
  const normTarget = normalizeLetters(targetDir);
  if (normBranch && normTarget && (normBranch === normTarget || normTarget.includes(normBranch) || normBranch.includes(normTarget))) {
    isAuthorized = true;
    console.log(`Matched PR branch '${prBranch}' to folder '${targetDir}'.`);
  }
}

// 3. Username normalization match
if (!isAuthorized && prAuthor) {
  const normAuthor = normalizeLetters(prAuthor);
  const normTarget = normalizeLetters(targetDir);
  if (normAuthor && normTarget && (normAuthor === normTarget || normTarget.includes(normAuthor) || normAuthor.includes(normTarget))) {
    isAuthorized = true;
    console.log(`Matched PR author '${prAuthor}' to folder '${targetDir}' via username normalization.`);
  }
}

// 4. Git history ownership check
if (!isAuthorized && !isNewDirectory && isOwnerByGitHistory) {
  isAuthorized = true;
  console.log(`Matched PR author '${prAuthor}' to folder '${targetDir}' via git commit history.`);
}

// 5. New directory validation
if (!isAuthorized && isNewDirectory && prAuthor) {
  const normAuthor = normalizeLetters(prAuthor);
  const normBranch = prBranch ? normalizeLetters(prBranch) : '';
  const normTarget = normalizeLetters(targetDir);
  
  if (
    (normAuthor && normTarget.includes(normAuthor)) || 
    (normAuthor && normAuthor.includes(normTarget)) ||
    (normBranch && normTarget.includes(normBranch)) ||
    (normBranch && normBranch.includes(normTarget))
  ) {
    isAuthorized = true;
    console.log(`Authorized creation of new folder '${targetDir}' for PR author '${prAuthor}'.`);
  }
}

 
// Local / Testing bypass
if (!prAuthor) {
  console.log('No PR_AUTHOR environment variable specified. Skipping ownership check (local run).');
  isAuthorized = true;
}

if (!isAuthorized) {
  console.error(`❌ Validation Error: You are not authorized to modify the folder '${targetDir}'.`);
  console.error(`Only files in your own folder may be modified in your PR.`);
  process.exit(1);
}

console.log('✅ Validation Succeeded! The PR complies with the repository guidelines.');
