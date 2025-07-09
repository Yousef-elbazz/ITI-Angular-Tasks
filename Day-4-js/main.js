// >>>>>>Task 1<<<<<
document.writeln("Task-1")
document.write("This is from an external file");


// >>>>>>Task 2<<<<<
function countvowels(str){
    str = str.toLowerCase();
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++;
        }
    }
    return count;
}
console.log("Task-2")
console.log("Number of Vowels " + countvowels("Hello World"));
console.log("Number of Vowels " + countvowels("This is Yousef Elbaz"));

// >>>>>>Task 3<<<<<
var numStr = "123.45";
console.log("\n---Task-3 Numeric String Conversion ---");


console.log("A. Conversion Differences:");
console.log("Using Number():", Number(numStr));         
console.log("Using parseInt():", parseInt(numStr));     
console.log("Using parseFloat():",  parseFloat(numStr));

// ===================
console.log("\nB. isNaN and isFinite Checks:");
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));                         // true
console.log("Number.isNaN('hello'):", Number.isNaN('hello'));                 // false
console.log("isNaN('hello'):", isNaN('hello'));                               // true 
console.log("Number.isFinite(123):", Number.isFinite(123));                   // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));         // false
console.log("Number.isFinite('100'):", Number.isFinite('100'));               // false (String)

// ===================
console.log("\n--- Number Constants ---");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.EPSILON:", Number.EPSILON);

// >>>>>>Task 4<<<<<
console.log("\n---Task-4 Experiment with the + operator  ---");

console.log("a. Adding two numbers " + (5+10));
console.log("b. Adding number to string 5" + 10 )

console.log("c. typeof Examples:");
console.log("typeof 10:", typeof 10);                   // number
console.log("typeof 'JavaScript':", typeof "JavaScript"); // string
console.log("typeof true:", typeof true);               // boolean
console.log("typeof undefined:", typeof undefined);     // undefined


// >>>>>>Task 5<<<<<
console.log("\n---Task-5 Function  ---");
// a. Named function that returns the sum of two numbers
function addNumbers(a, b) {
    return a + b;
}
console.log("a. Sum of 5 and 3:", addNumbers(5, 3)); // 8

  // b. Anonymous function assigned to a variable that multiplies two numbers
  const multiply = function(a, b) {
    return a * b;
};
console.log("b. Product of 4 and 6:", multiply(4, 6)); // 24

  // c. Function with default parameters
  function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log("c. Greeting with default:", greet());          
console.log("   Greeting with name:", greet("Yousef Elbaz")); 



// >>>>>>Task 6<<<<<
console.log("\n---Task-6 Variable Scope  ---");
var variable = "Global";

function scopeExample() {
    var variable = "Local";
    console.log("Inside function:", variable);  // local
}
console.log("Outside function:", variable);     // global
scopeExample();

 // === b. Variable Hoisting ===
 function hoistingExample() {
    console.log("Before declaration:", Var); // undefined (hoisted)
    var Var = "Now defined";
    console.log("After declaration:", Var);  // "Now I’m defined"
}

hoistingExample();


// >>>>>>Task 7<<<<<
console.log("\n---Task-7 calculateHypotenuse  ---");
function calculateHypotenuse(a, b) {
    function square(x) {
        return x * x;
    }
    const hypotenuse = Math.sqrt(square(a) + square(b));
    return hypotenuse;
}
console.log("Hypotenuse of 3 and 4:", calculateHypotenuse(3, 4)); 


// >>>>>>Task 8<<<<<
console.log("\n---Task-8 function sumAll()   ---");
function SumAll(){
    var total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log("sumAll(1, 2, 3, 4):", sumAll(1, 2, 3, 4));   // Output: 10



