/*************************************
 *        FOR LOOP
 *************************************/
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// Using for loops to go through the values in an array and print them out.
var colors = ["red", "blue", "green", "yellow"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Strings behave like arrays.
var myString = "This is a string";

for (var i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}

/***************************************
 *        FOR...OF LOOP
 ***************************************/

// This type of loop is use for arrays and strings.
for (var eachColor of colors) {
  console.log(eachColor);
}

for (var eachLetter of myString) {
  console.log(eachLetter);
}

/**************************************
 *        WHILE LOOPS
 ***************************************/
var incrementor = 0;
var text = "";

// while ( incrementor < colors.length ) {
//   console.log(colors[incrementor]);
//   incrementor++;
// }

// while ( incrementor <= 10 ) {
//   console.log( incrementor );
//   incrementor++;
// }

// while (incrementor <= 10) {
//   text += "The incrementor has gone up to " + incrementor + "\n";
//   incrementor++;
// }
// console.log(text);

// while (incrementor <= 10) {
//   text += `The incrementor has gone up to ${incrementor} \n`;
//   incrementor++;
// }
// console.log(text);

while (incrementor <= 10) {
  text += `The incrementor has gone up to ${incrementor}, and the square of the incrementor is ${incrementor**2} \n`;
  incrementor++;
}
console.log(text);