function nameOfFunction()
{
    console.log("Function Definition!");
}

// nameOfFunction; Reference
nameOfFunction() // Function Call

// Function With parameters :

function add1(n1,n2) //Parameters contains undefined by default
{
    console.log(n1+n2);
}

let o1 = add1(10,20) // undefined
console.log(o1);

function add2(n1,n2) //Parameters contains undefined by default
{
    return n1+n2;
}

let o2 = add2(10,20); //30
console.log(o2);

// Default arguments :

function newf(val = "Hassan")
{
    console.log(val);
}

newf();
newf("Az");


function check(par)
{
    if(par === undefined)
    {
        console.log("Please pass an argument!");
    }
    else 
    {
        console.log(`par : ${par}`);
    }
}

check();
check("Argument is here!");