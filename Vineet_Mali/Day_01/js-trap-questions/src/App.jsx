import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function App() {
  const questions = useMemo(
    () => [
      {
        id: 1,
        difficulty: "Easy",
        title: "What will be the output?",
        code: "let age = 18\nconsole.log(typeof age)",
        options: ["number", "string", "boolean", "undefined"],
        correctAnswer: "number",
        explanation: "18 is a number value, so typeof returns 'number'.",
        concept: "Data Types",
        beginnerExample: "typeof 25 // 'number'",
      },

      {
        id: 2,
        difficulty: "Easy",
        title: "What will be the output?",
        code: 'console.log("10" + 5)',
        options: ["15", "105", "NaN", "error"],
        correctAnswer: "105",
        explanation:
          "The + operator concatenates when one operand is a string.",
        concept: "Type Coercion",
        beginnerExample: '"5" + 2 // "52"',
      },

      {
        id: 3,
        difficulty: "Easy",
        title: "What will be the output?",
        code: 'console.log("10" - 5)',
        options: ["105", "15", "5", "NaN"],
        correctAnswer: "5",
        explanation:
          "The - operator converts strings to numbers before subtraction.",
        concept: "Type Coercion",
        beginnerExample: '"20" - 10 // 10',
      },

      {
        id: 4,
        difficulty: "Medium",
        title: "What will be the output?",
        code: "let name\nconsole.log(name)",
        options: ["null", "undefined", "error", "string"],
        correctAnswer: "undefined",
        explanation: "The variable exists but has not been assigned a value.",
        concept: "undefined",
        beginnerExample: "let city;\nconsole.log(city)",
      },

      {
        id: 5,
        difficulty: "Medium",
        title: "What will be the output?",
        code: "let user = null\nconsole.log(typeof user)",
        options: ["null", "object", "undefined", "string"],
        correctAnswer: "object",
        explanation: "This is a famous historical bug in JavaScript.",
        concept: "null",
        beginnerExample: "typeof null // 'object'",
      },

      {
        id: 6,
        difficulty: "Medium",
        title: "What will be the output?",
        code: "const age = 18\nage = 20\nconsole.log(age)",
        options: ["18", "20", "error", "undefined"],
        correctAnswer: "error",
        explanation: "const variables cannot be reassigned.",
        concept: "const",
        beginnerExample: "const pi = 3.14",
      },

      {
        id: 7,
        difficulty: "Medium",
        title: "What will be the output?",
        code: "console.log(typeof undefined)",
        options: ["object", "null", "undefined", "string"],
        correctAnswer: "undefined",
        explanation: "undefined has its own type in JavaScript.",
        concept: "typeof",
        beginnerExample: "typeof undefined",
      },

      {
        id: 8,
        difficulty: "Hard",
        title: "What will be the output?",
        code: "console.log(a)\nlet a = 10",
        options: ["10", "undefined", "error", "null"],
        correctAnswer: "error",
        explanation:
          "let variables are in the Temporal Dead Zone until their declaration is reached.",
        concept: "TDZ",
        beginnerExample:
          "Accessing a let variable before declaration causes an error.",
      },

      {
        id: 9,
        difficulty: "Easy",
        title: "What will be the output?",
        code: 'console.log(typeof "Hello")',
        options: ["string", "object", "text", "undefined"],
        correctAnswer: "string",
        explanation: "Values inside quotes are strings.",
        concept: "Strings",
        beginnerExample: 'typeof "JS"',
      },

      {
        id: 10,
        difficulty: "Medium",
        title: "What will be the output?",
        code: "let score = '5'\nconsole.log(typeof score)",
        options: ["number", "string", "boolean", "object"],
        correctAnswer: "string",
        explanation:
          "Even though it looks like a number, quotes make it a string.",
        concept: "Data Types",
        beginnerExample: 'typeof "100" // string',
      },
      {
        id: 11,
        difficulty: "Easy",
        title: "What will be the output?",
        code: 'const name = "Vineet"\nif(name){\n console.log("Hello")\n}',
        options: ["Hello", "true", "false", "error"],
        correctAnswer: "Hello",
        explanation:
          "Non-empty strings are truthy values, so the if block runs.",
        concept: "Truthy Values",
        beginnerExample: 'if("JS"){ console.log("Runs") }',
      },
      {
        id: 12,
        difficulty: "Easy",
        title: "What will be the output?",
        code: "let a = 5\na = 'Hello'\nconsole.log(typeof a)",
        options: ["number", "string", "error", "undefined"],
        correctAnswer: "string",
        explanation:
          "JavaScript is dynamically typed. Variables can store different types of values.",
        concept: "Dynamic Typing",
        beginnerExample: "let x = 10\nx = 'JS'",
      },
      {
        id: 13,
        difficulty: "Medium",
        title: "What will be the output?",
        code: "console.log(true + 1)",
        options: ["2", "11", "true1", "error"],
        correctAnswer: "2",
        explanation: "true is converted to 1 during numeric operations.",
        concept: "Type Coercion",
        beginnerExample: "false + 1 // 1",
      },
      {
        id: 14,
        difficulty: "Medium",
        title: "What will be the output?",
        code: "console.log(false + 1)",
        options: ["0", "1", "false1", "error"],
        correctAnswer: "1",
        explanation: "false becomes 0 during numeric operations.",
        concept: "Type Coercion",
        beginnerExample: "true + 1 // 2",
      },
      {
        id: 15,
        difficulty: "Hard",
        title: "What will be the output?",
        code: "console.log('5' === 5)",
        options: ["true", "false", "error", "undefined"],
        correctAnswer: "false",
        explanation: "Strict equality checks both value and type.",
        concept: "Strict Equality",
        beginnerExample: "'10' === 10 // false",
      },
    ],
    [],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(() =>
    Array(questions.length).fill(null),
  );
  const [showFinalScore, setShowFinalScore] = useState(false);

  useEffect(() => {
    if (currentIndex >= questions.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, questions.length]);

  const safeIndex = currentIndex < questions.length ? currentIndex : 0;
  const currentQuestion = questions[safeIndex];
  const selectedAnswer = userAnswers[safeIndex] ?? null;

  const answeredCount = useMemo(
    () => userAnswers.filter((answer) => answer !== null).length,
    [userAnswers],
  );

  const score = useMemo(
    () =>
      questions.reduce((total, question, index) => {
        return userAnswers[index] === question.correctAnswer
          ? total + 1
          : total;
      }, 0),
    [questions, userAnswers],
  );

  const allAnswered = answeredCount === questions.length;
  const progress = (answeredCount / questions.length) * 100;

  const handleSelect = (option) => {
    if (selectedAnswer !== null) {
      return;
    }

    setUserAnswers((previous) => {
      const updated = [...previous];
      updated[currentIndex] = option;
      return updated;
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((previous) => previous + 1);
      return;
    }

    if (allAnswered) {
      setShowFinalScore(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((previous) => previous - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers(Array(questions.length).fill(null));
    setShowFinalScore(false);
  };

  const getOptionState = (option) => {
    if (selectedAnswer === null) {
      return "idle";
    }

    if (option === currentQuestion.correctAnswer) {
      return "correct";
    }

    if (
      option === selectedAnswer &&
      selectedAnswer !== currentQuestion.correctAnswer
    ) {
      return "wrong";
    }

    return "idle";
  };

  if (showFinalScore) {
    return (
      <main className="paper-bg min-h-screen p-4 sm:p-6 lg:p-10">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-700/70 bg-[#1F2937]/90 p-6 shadow-paper backdrop-blur sm:p-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo-300">
            Final Report Card
          </p>
          <h1 className="mt-2 font-display text-3xl text-slate-100 sm:text-4xl">
            JS Trap Questions Complete
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            You scored{" "}
            <span className="font-semibold text-emerald-400">{score}</span> out
            of <span className="font-semibold">{questions.length}</span>.
          </p>
          <p className="mt-3 text-slate-400">
            Accuracy: {Math.round((score / questions.length) * 100)}%
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Answered
              </p>
              <p className="mt-1 text-2xl font-semibold text-slate-100">
                {answeredCount}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Correct
              </p>
              <p className="mt-1 text-2xl font-semibold text-emerald-400">
                {score}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Wrong
              </p>
              <p className="mt-1 text-2xl font-semibold text-rose-400">
                {questions.length - score}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={restartQuiz}
            className="mt-8 rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
          >
            Restart Quiz
          </button>
        </motion.section>
      </main>
    );
  }

  return (
    <main className="paper-bg min-h-screen p-4 sm:p-6 lg:p-10">
      <div className="mx-auto w-full max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 rounded-3xl border border-slate-700/70 bg-[#1F2937]/80 p-5 shadow-paper backdrop-blur sm:p-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-indigo-300">
                Modern School of JavaScript
              </p>
              <h1 className="mt-2 font-display text-3xl text-[#E5E7EB] sm:text-4xl">
                JS Trap Questions
              </h1>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm text-slate-200">
              Score:{" "}
              <span className="font-semibold text-emerald-400">{score}</span> /{" "}
              {questions.length}
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex justify-between text-xs uppercase tracking-widest text-slate-400">
              <span>
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                className="h-full rounded-full bg-indigo-500"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.45 }}
              />
            </div>
          </div>
        </motion.header>

        <AnimatePresence mode="wait">
          <motion.section
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28 }}
            className="rounded-3xl border border-slate-700/70 bg-[#1F2937]/90 p-5 shadow-paper backdrop-blur sm:p-7"
          >
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-indigo-400/40 bg-indigo-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-200">
                {currentQuestion.difficulty}
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-800/70 px-3 py-1 text-xs uppercase tracking-wider text-slate-300">
                {currentQuestion.concept}
              </span>
            </div>

            <h2 className="font-display text-2xl text-[#E5E7EB]">
              {currentQuestion.title}
            </h2>

            <pre className="mt-4 overflow-x-auto rounded-2xl border border-slate-700 bg-slate-900/70 p-4 font-mono text-sm text-slate-100">
              <code>{currentQuestion.code}</code>
            </pre>

            <div className="mt-5 grid gap-3">
              {currentQuestion.options.map((option) => {
                const state = getOptionState(option);

                const styles =
                  state === "correct"
                    ? "border-emerald-400/70 bg-emerald-500/15 text-emerald-200"
                    : state === "wrong"
                      ? "border-rose-400/70 bg-rose-500/15 text-rose-200"
                      : "border-slate-600 bg-slate-800/80 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-700/80";

                return (
                  <motion.button
                    key={option}
                    whileHover={{ scale: selectedAnswer ? 1 : 1.01 }}
                    whileTap={{ scale: selectedAnswer ? 1 : 0.99 }}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className={`w-full rounded-2xl border p-4 text-left text-sm transition sm:text-base ${styles}`}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <p
                  className={`text-sm font-semibold ${
                    selectedAnswer === currentQuestion.correctAnswer
                      ? "text-emerald-400"
                      : "text-rose-400"
                  }`}
                >
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? "✅ Correct"
                    : "❌ Wrong"}
                </p>

                <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-900/60 p-4 sm:p-5">
                  <h3 className="font-display text-xl text-slate-100">
                    Detailed Explanation
                  </h3>
                  <p className="mt-2 text-slate-300">
                    {currentQuestion.explanation}
                  </p>
                  <p className="mt-3 text-sm text-slate-400">
                    <span className="font-semibold text-slate-200">
                      Concept:{" "}
                    </span>
                    {currentQuestion.concept}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    <span className="font-semibold text-slate-100">
                      Beginner example:{" "}
                    </span>
                    {currentQuestion.beginnerExample}
                  </p>

                  <div className="mt-4 grid gap-2 text-sm text-slate-300">
                    {currentQuestion.options.map((option) => (
                      <p key={option}>
                        <span className="font-semibold text-slate-100">
                          {option}:{" "}
                        </span>
                        {currentQuestion.optionNotes?.[option] ??
                          "This option is incorrect because it does not match the evaluated JavaScript output."}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.section>
        </AnimatePresence>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="rounded-xl border border-slate-600 bg-slate-800 px-5 py-2.5 text-slate-200 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-45"
          >
            Previous Question
          </button>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={restartQuiz}
              className="rounded-xl border border-slate-600 bg-slate-800 px-5 py-2.5 text-slate-200 transition hover:border-indigo-400"
            >
              Restart Quiz
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1 && !allAnswered}
              className="rounded-xl bg-indigo-500 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {currentIndex === questions.length - 1
                ? "Show Final Score"
                : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
