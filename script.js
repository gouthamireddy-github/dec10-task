// 1. How would you define a function that takes two numbers as parameters and returns their sum?
function sum(a,b){
    return `sum of a and b is: ${a+b}`
}
var res=sum(20,10)
console.log(res);

//2. If you define a function that accepts a string as a parameter, how would you modify it to print the string in uppercase?
function text(str){
    console.log(str.toUpperCase());
}
text("string");

//3. In JavaScript, what happens if you pass an undefined value as an argument to a function that expects a parameter?
function print(a){
    console.log(a)
}
print(undefined);

// Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?
function isArrayEmpty(array){
    console.log(array.length)
}
isArrayEmpty([]);
isArrayEmpty([1,2,3]);

// 5. write a function that takes two numbers as parameters and returns their difference.
function difference(a,b){
    return "the difference of a and b is " + (a-b);
}
console.log(difference(20,10));

// 6. Define a function that accepts a name and age as parameters, and returns a string with a greeting like "Hello, [name]! You are [age] years old."
function greet(name,age){
    return `Hello, ${name} you are ${age} years old.` 
}
var res=greet("abhi",23);
console.log(res);

// 7. Write a function that takes a number as a parameter and returns true if the number is a even number, otherwise false.
function isItEvenNum(a){
   return a % 2 === 0;
}
console.log(isItEvenNum(4));
console.log(isItEvenNum(3))