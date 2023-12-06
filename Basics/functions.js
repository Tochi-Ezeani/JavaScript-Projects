function numberPrompt() {
  var userNum = prompt("Enter a whole number");

  if (userNum < 10) {
    console.log("You entered a number smaller than 10");

    for (var i = 0; i < 10; i++) {
      console.log(`Here is a ${i}`);
    }
  } else if (userNum > 9) {
    console.log("You entered a big number");
  } else {
    console.log("ERROR: You didn't enter a number!");
  }
}

// numberPrompt();

function addNum(num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
}

// addNum(3, 49);

function returnSum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

// console.log(returnSum(90, 999));

// console.log(Math.random());

function randomInt(min, max) {
  var numOfValues = max - min + 1;
  var randomNum = Math.random();
  var randomVal = numOfValues * randomNum;
  var roundedRandomVal = Math.floor(randomVal);
  var finalNum = min + roundedRandomVal;

  console.log(finalNum);
}

// randomInt(5, 10);

/*****************************
 *    FUNCTION EXPRESSIONS 
******************************/

var greeting = function() {
  console.log("Good morning!");
}

// greeting();

/************************************
 *    ARROW FUNCTION EXPRESSIONS
 ************************************/

// var salute = null => "Top of the morning to you lad!";
// console.log(salute());