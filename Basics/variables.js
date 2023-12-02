// creating a variable in function scope
var myName = "Melodie Ezeani"; 

// creating a variable in local scope
let myBrother = 'Ebuka';
let brotherAge = 23;

// indexing a string
console.log(myName[5]);
console.log(myBrother[3]);

var mySchool = 'Unizik';
console.log(mySchool[mySchool.length - 1]);



/***************************************************
                 OPERATORS
***************************************************/

//assignment operator
var myNum = 22;
var mySecondNum = 14;
mySecondNum+=4;
console.log(mySecondNum);
mySecondNum-=10;
console.log(mySecondNum);
mySecondNum*=4;
console.log(mySecondNum);
mySecondNum/=2;
console.log(mySecondNum);
mySecondNum%=3;
console.log(mySecondNum);
mySecondNum**=10;
console.log(mySecondNum);

//arithmetic operators
console.log(myNum + mySecondNum);
console.log(myNum * mySecondNum);
console.log(myNum - mySecondNum);
console.log(myNum**mySecondNum);
console.log(myNum / mySecondNum);
console.log(myNum % mySecondNum);
myNum++; //this increments by 1 and updates the variable
console.log(myNum);
myNum--;
console.log(myNum);

//comparison operators
console.log(myNum == mySecondNum);
console.log(myNum === 22);
console.log(myNum != mySecondNum);
console.log(myNum !== 22);
console.log(myNum > mySecondNum);
console.log(myNum < mySecondNum);
console.log(myNum >= mySecondNum);
console.log(myNum <= mySecondNum);


