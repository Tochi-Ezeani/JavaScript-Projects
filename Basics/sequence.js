var myString = "I am really hungry for some";
console.log(myString);
var myUpperString = myString.toUpperCase();
console.log(myUpperString);

// String surgery with the .search(), .substring(), and .replace() methods.
var reallyLocation = myString.search('really');
var specialWord = myString.substring(reallyLocation, 11);
specialWord = specialWord.toUpperCase();
var newString = myString.replace('really', specialWord);
console.log(newString);

var foods = ['cheese', 'pie', 'lunch', 'breakfast'];

// for (var i = 0; i < foods.length; i++) {
//   console.log(`${myString} ${foods[i]}`);
// }

// for (var eachFood of foods) {
//   console.log(`${myString} ${eachFood}`);
// }

for (var i = 0; i < foods.length; i++) {
  if (i % 2 === 0) {
    console.log(`${myString} ${foods[i].toUpperCase()}`);
  } 
  else {
    console.log(`${myString} ${foods[i]}`);
  }
}

