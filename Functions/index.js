// Named Function 
 var b = function god(){
    console.log("variable b is called")
 }
 b(); //variable b is called
 god() // index.js:6  Uncaught ReferenceError: god is not defined
       // at index.js:6:2

// Parameter vs Argument 
var a = function(param1, param2){
    console.log("a is called")
}
a(1,2);