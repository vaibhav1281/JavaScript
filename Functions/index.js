// Named Function 
 var b = function god(){
    console.log("variable b is called")
 }
 b(); //variable b is called
 god() // index.js:6  Uncaught ReferenceError: god is not defined
       // at index.js:6:2

// when we call god() then we'll get ReferenceError