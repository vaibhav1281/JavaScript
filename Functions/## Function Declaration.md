 ## Function Declaration
In JavaScript, functions can be declared in several ways. One way is to use a named function. A named function is a function that is defined with a name. The syntax for a named function is:

```javascript
function functionName() {
  // code to be executed
}
```

```javascript
// Named Function 
 var b = function god(){
    console.log("variable b is called")
 }
 b(); //variable b is called
 god() // index.js:6  Uncaught ReferenceError: god is not defined
       // at index.js:6:2
```

In the example provided, the named function is called `god`. The function is defined with the `function` keyword, followed by the function name, and then the parentheses. The parentheses can be empty, or they can contain parameters. Parameters are placeholders for values that will be passed to the function when it is called.

In the example, the `god` function does not have any parameters. This means that when the function is called, no values will be passed to it.

To call a named function, simply use the function name followed by parentheses. For example, to call the `god` function, you would write:

```javascript
god();
```

When the `god` function is called, the code inside the function will be executed. In this case, the code inside the function is simply to log the message "variable b is called" to the console.

## Parameter vs Argument

```javascript
// Parameter vs Argument 
var a = function(param1, param2){
    console.log("a is called")
}
a(1,2);
```

In JavaScript, a parameter is a placeholder for a value that will be passed to a function when it is called. An argument is a value that is actually passed to a function when it is called.

In the example provided, the `a` function has two parameters: `param1` and `param2`. When the `a` function is called, two values will be passed to it. These values will be assigned to the `param1` and `param2` parameters.

In the example, the `a` function is called with the arguments `1` and `2`. This means that the value `1` will be assigned to the `param1` parameter, and the value `2` will be assigned to the `param2` parameter.

Inside the `a` function, the `param1` and `param2` parameters can be used to access the values that were passed to the function. In the example, the `a` function logs the message "a is called" to the console.

## Conclusion
In this tutorial, we learned how to declare named functions in JavaScript. We also learned about parameters and arguments. By understanding these concepts, you will be able to write more effective JavaScript code.
