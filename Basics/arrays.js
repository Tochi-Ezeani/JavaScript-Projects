// creating an array
var groceryList = ['yam', ['bread', 'oats', 'milk'], ['maggi', 'salt', 'thyme', 'curry'], 'detergent'];
var groceryList1 = new Array('bread', 'oats', 'milk', ['maggi', 'salt']);

// indexing an array
console.log(groceryList[1][0]);

// the sum operator
console.log('My brother is ' + brotherAge + ' years old'); //JavaScript converts a number to a string during concatenation with a string
console.log(24+brotherAge);

//array methods
groceryList.sort();  //sort updates the list
console.log(groceryList);

//splice takes in 1 or more arguments (the first is compulsory) splice(startIndex, deleteCount, item1, item2,...,itemN). It returns the item deleted
groceryList1.splice(0, 1); 
console.log(groceryList1);
groceryList1.splice(0, 0, 'mayo');
console.log(groceryList1);

groceryList1.push('oil');  //push acts like append in python
console.log(groceryList1);
console.log(groceryList1[groceryList1.length - 1]);