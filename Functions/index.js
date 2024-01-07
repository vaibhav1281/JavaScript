// What is function statement ?

a(); // a is called
b(); // index.js:4  Uncaught TypeError: b is not a function
    //at index.js:4:1
function a(){
    console.log("a is called")
}
// Function Calling 


// What is FUnction Expression ?

var b = function(){
    console.log("b is called")
} 


// Lest see how Hoisting make difference. If WE call the both function on top the , we'll get TypeError
