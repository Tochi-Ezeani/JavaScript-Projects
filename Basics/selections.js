/***************************************************
                 IF-ELSE_STATEMENT
***************************************************/
var myColors = new Array('red', 'blue', 'green', 'yellow');
var selectedColor = myColors[4];

if (selectedColor === 'red') {
    console.log('The selected color is red');
}
else if (selectedColor === 'blue') {
    console.log('The selected color is blue');
}
else if (selectedColor === 'green') {
    console.log('The selected color is green');
}
else {
    console.log('The selected color is yellow');
}


/***************************************************
                 SWITCH-STATEMENT
***************************************************/
switch (selectedColor) {
    case 'red': console.log('The selected color is red'); break;
    case 'blue': console.log('The selected color is blue'); break;
    case 'green': console.log('The selected color is green'); break;
    case 'yellow': console.log('The selected color is yellow'); break;
    default: console.log('Select a valid color');
}

//logical operators
var eatBreakfast = true;
var eatLunch = false;
var eatDinner = false;

if ((!eatBreakfast || eatDinner) && eatLunch) {
    console.log('I have eaten today, I will not die!');
}
else {
    console.log('I am starving, will I survive to see tomorrow!');
}


/*Falsy values:
- undefined
- null
- NaN
- false
- 0
- Empty strings

Truthy
- true
- Any positive or negative number
- Any string
*/

var storage ; //this variable is undefined
var storage1 = -23;
var storage2 = "";
var product = storage2*storage1;
// console.log(storage2*storage1);


if (storage1) {
    console.log("The statement is true");
}
else {
    console.log("The statement is false");
}