/* 
Data types in JavaScript(8): Undefined, null, boolean, string, number, symbol, bigint, object. 
*/


//(1). Declaring your variables : var, let and const. 

var myName;

//Storing values in variables with an assignment operator.
myName = "Kanja";

//(2). Initializing Variables with the assignment operator.
var myNum = 77;

var cr = 7; //Has a function scope.
/*
If you use outside of a function - global scope.
If you use inside of a function - it belongs to that function.
*/

let cr = 7;//Has a block scope. Is mutable and uses camelCase.
/*
Scoped version of var.
*/

const CR =7;//Has a block scope. Is immutable and written in full uppercase.
/*
A variable once created, the value can never change. Its read-only.
*/