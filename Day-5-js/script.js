// >>>>>>First Task<<<<<<<
//-----------Check Age Category-------------
function checkAgeCategory(age) {
    if (age < 12) {
      console.log("Child");
    } else if (age < 18) {
      console.log("Teen");
    } else if (age < 60) {
      console.log("Adult");
    } else {
      console.log("Senior");
    }
  }
  console.log("\n Checking Age Category")

  checkAgeCategory(10); // Child
  checkAgeCategory(15); // Teen
  checkAgeCategory(30); // Adult
  checkAgeCategory(65); // Senior

  //-------- Weekday using Switch------
  function getWeekday(dayNumber) {
    switch (dayNumber) {
      case 1:
        console.log("Sunday");
        break;
      case 2:
        console.log("Monday");
        break;
      case 3:
        console.log("Tuesday");
        break;
      case 4:
        console.log("Wednesday");
        break;
      case 5:
        console.log("Thursday");
        break;
      case 6:
        console.log("Friday");
        break;
      case 7:
        console.log("Saturday");
        break;
      default:
        console.log("Invalid day number (must be 1-7)");
    }
  }
  console.log("\n Get WeekDay Name")

  getWeekday(3); // Tuesday
  getWeekday(6); // Friday

  // ---Odd/Even using ternary operator---
  function checkOddEven(number) {
    var result = (number % 2 === 0) ? "Even" : "Odd";
    console.log(result);
  }
console.log("\n Checking Odd or Even")
  checkOddEven(4); // Even
  checkOddEven(7); // Odd

  // >>>>>>Second Task<<<<<<<
  // ----simple calculator to use Eval
  function CalculatorUsingEval(string){
      console.log(eval(string))
    }
console.log("\n Calculator Using Eval")
CalculatorUsingEval(50+10);
    
    // >>>>>>Third Task<<<<<<<
    //-------Array Practice-----
    
console.log("\n Array Practice")

numbers = [12,51,84,56,18,23,18,56,81,60]
console.log("Original Array:", numbers);

//----Filter Above 50-----
function filterAbove50(arr) {
    return arr.filter(num => num > 50);
}

console.log("Using Filter Above 50:", filterAbove50(numbers));

//----Print Arr Elements Using Foreach-----
function printElements(arr) {
    arr.forEach((num, index , arr) => {
        console.log(`Index ${index}: Value = ${num}`);
    });
}

printElements(numbers);

//-------Check if all numbers is even using Every-----
function areAllEven(arr) {
    return arr.every(num => num % 2 === 0);
  }
    console.log("All Even?", areAllEven(numbers));

    
    //-------Check if at least one number > 90 using some-----
    function hasGreaterThan90(arr) {
        return arr.some(num => num > 90);
    }
    
    console.log("Has > 90?", hasGreaterThan90(numbers));
    
    //----sort array in descending order-----
    var sortedDescArr = [numbers].sort((a, b) => b - a);
    console.log("Sorted Descending:", sortedDescArr);
    
    //------Reverse Array-----
    var reversedArr = [numbers].reverse();
    console.log("Reversed Array:", reversedArr);
    
    
    
    //>>>>>>Array Mini Projects<<<<<<<<<
    //----Remove Duplicates in Array----
    
    function removeDuplicates(arr) {
        var NewArr = [];
        
        for (let i = 0; i < arr.length; i++) {
            if (!(NewArr.includes(arr[i]))) {
                NewArr.push(arr[i]);
            }
        }
        
        return NewArr;
    }
    
    var result = removeDuplicates([1, 2, 3, 2, 4, 3, 5, 1]);
    console.log("New Array:", result); // [1, 2, 3, 4, 5]
    
    //--------Sum Array ----------
    function sumArray(arr) {
        var sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    console.log("Sum:", sumArray(numbers)); // 100
    
    
    
//>>>>>>>>>Task 5<<<<<<<
//----Math object Practice----
console.log("\n Math Object Practice");

function getRandomInt() {
    return Math.floor(Math.random()*100) ;
}

console.log("Random number:", getRandomInt());

//----Factorial----

function factorial(n) {
    if (n < 0) return "Invalid number";
    
    var result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

console.log("5! =", factorial(5)); // 120
console.log("0! =", factorial(0)); // 1


//-------Get Square root -----
function getSquareRoot(num) {
    return Math.sqrt(num);
}

console.log("Square root =", getSquareRoot(16)); //=>4


//>>>>>>Task 6 <<<<<<
//----Date Object Practice
console.log("\n Date Object Practice");

//---Check Date ---
function isWeekend(date) {
    let day = date.getDay(); 
    return day === 0 || day === 6;
  }
  
  console.log("Is weekend?", isWeekend(new Date("2025-07-06"))); // Sunday → true
  console.log("Is weekend?", isWeekend(new Date("2025-07-07"))); // Monday → false


  //-----Return Month Name----
  function getMonthName(date) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    return months[date.getMonth()];
  }
  
  console.log("Month:", getMonthName(new Date("2025-07-07"))); // "July"
  console.log("Month:", getMonthName(new Date("2025-1-25"))); // "December"



    
    
    
    


