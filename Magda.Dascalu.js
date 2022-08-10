var http = require('http');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello World!');
 }).listen(8080);
 
 //Task 1
//1.1 ES6 Methods
//--This is an example of a returning function
 function retStr() { 
    return "hello world!!!" 
 }  
 var val = retStr() 
 console.log(val)
 //--This is an example of a parametrized function
 function add( n1,n2) { 
    var sum = n1 + n2 
    console.log("The sum of the values entered "+sum) 
 } 
 add(12,13) 
  //--Array.from() - enables new array creation from an array-like object
  let name = Array.from('TribeOfInterns')  
  console.log(name) 

  //--Array.of() - when creating an array only with a sigle numeric value, 
  //it will create an array only an array with that value
  let arr = Array.of(15)  
 console.log(arr)  
 console.log(arr.length)  

 //1.2
 //In the creation phase, the JavaScript engine assigns storage spaces 
 //to the let variables but does not initialize the variables,
 // compared to var variabels which are initialized to undefined.
 //Also you can redeclare a variable declared with var, but not one declared with let.
 var counter = 10;
var counter;
console.log(counter); // 10
let counter2 = 10;
//let counter2; // error
//const keyword is like let keyword: it declares blocked-scope variables, 
//but the difference is that they are immutable.
const RATE = 0.1;
//RATE = 0.2; // TypeError

//1.3 Spread operator - spreads out elements of an iterable object.
const myArray = [1,3,5];
const combined = [2,4,6, ...myArray];
console.log(combined);
//The three dots ( ...) located in front of myArray array is the spread operator. 
//The spread operator (...) unpacks the elements of myArray array.

//1.4 Objects
//Object creation example
const person = {firstName:"Maria", lastName:"Popescu", age:50, eyeColor:"blue"};

//Iterating an array example
for (const x of [1,2,3,4,5]) {
    console.log(x);
  }

//1.5 Arrays
//Access an array by index number
const x = [1,2,3,4,5];
let y = x[3];

//Array iteration methods operate on every array item .Examples: foreach(), map(), reduce(), filter()
//foreach example: sum of array numbers
const numbers = [1,2,3,4,5];
let sum = 0;
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  sum += value;
}
console.log(sum);