// Question 1 : Declare a variable called firstVar but don't initialise it with a value.

var firstVar

// Question 2 :Declare a variable called name and assign it your first name.

var name = "sunil";
console.log(name);

// Question 3 :Declare and initialise a variable with a number value.

var myNumber = 10;
console.log(myNumber);

// Question 4  : Create a variable called division and initialise it with a value of 20 divided by 5.

var division = 20 / 5;
console.log(division);

// Question 5  :Write code that checks the type of the value "frog".
var animal = "frog";
console.log(typeof animal);

// Question 6  :Declare and initialise a variable called orderHasShipped with a boolean value.

var orderHasShipped = true;
console.log(orderHasShipped);

// Question 7  :Create an if statement that checks if orderHasShipped is true. If it is true, console log the string value "true". If not, console log the string value "false".

var orderHasShipped = true;
if (orderHasShipped === true) {
    console.log("true");
} else {
    console.log("false");
}
// Question 8  :Create a for loop that counts from 0 to 9. Console log the value of the counter variable inside the loop.
for (var counter = 0; counter <= 9; counter += 1) {
    console.log(counter);
}