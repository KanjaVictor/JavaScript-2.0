//---Functions---

//Output
document.write(); //Its a function that writes texts into our HTML document.
//Output to Console
console.log(); //Its a function that performs output to the web console.

alert();//Its used to create a message box.

//Variables
var cR = 7; //var keyword declares a variable, which are containers for storing data values.

//Comments
//Singleline Comments.This is an example of a Singleline comment.
/*
Multiline Comments
This is an example of a Multiline comment.
*/

//Data Types-->Numbers, String, Arrays...

//Escaping Characters - Done using the backslash. Example: \"

//Logical Operators
/*
AND (&&)->Returns true if both conditions are true.
OR (||)->Returns true if one of the conditions is true.
NOT (!)->Returns true if the condition is false.
Ternary condition -> condition ? true : false
*/

//Conditionals and Loops
/*
//--Conditionals--
if statement
else statement
else if statement

switch statement->
switch (expression) {
  case expression:
    statement
    break;//The keyword that stops execution of more code.It breaks out of the switch block.
  default://The keyword that specifies the code to run if there is no match
    statement
    break;
}

//--Loops--
for loop->
for (var i = 0; i < 10; i++) {
  code block to be executed
}

while loop->
while (condition) {
  code block
}

Do...While loop->
do {
  code block
} while (true);
*/

//--Function--
//Defining
function functionName() {
  //code to be executed
  return; //Its used a value from a function. When Js reaches it the code stops executing.
}
//Calling
functionName();

//JavaScript offers three types of popup boxes:
/*
The Alert, takes a single parameter, which is displayed in the popup box.
The Prompt, takes two parameters, used to have the user input a value before entering a page.
The Confirm, used to verify or accept something.
*/

var user = prompt("Please enter your name");//Prmpts you to give your name which is stored in the variable user.
alert(user);//Alert then displays the name stored in the variable user.

var result = confirm("Do you really want to leave this page?"); //Gives two options "OK" returns true, and "Cancel" returns false.
if (result == true) {
  alert("Thanks for visiting");
}else {
  alert("Thanks for staying with us");
}

//JavaScript Objects
//Objects have name:value pairs.The values are called properties.
var person = {
  name : "John",
  age : 20,
  height : 190,
  occupation : "Full-stack Developer"
}

//Object Properties

//Accessing object properties
objectName.propertyName
//or
objectName['propertyName']

//Object Methods, a property that contains a function definition
objectName.methodName();

//The Object Constructor
var person = {
  name : "John",
  age : 20,
  height : 190,
  occupation : "Full-stack Developer"
}
//This only allows us to create only a single object.

//In the case we need to create multiple objects of the same type, we set an "object type".This is done using an Object Constructor function.
function person(name, age, occupation){
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

// The keyword new is used to create an instance of an object.
var p1 = new person("John", 20, "Developer");
var p2 = new person("Jane", 19, "Doctor");

//Methods, they are functions that are stored as object properties
methodName = function(){
  //codes of lines.
}

//Accessing an object method.
objectName.methodName();
