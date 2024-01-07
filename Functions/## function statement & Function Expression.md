## What is difference between function statement & Function Expression javascript

The primary difference between function declarations and function expressions in JavaScript lies in how the functions are defined and how they can be used in your code.

- Function Declaration (Function Statement):

A function declaration defines a function in the current scope. Function declarations can be used as statements or as expressions.

Example of a function declaration:

```javascript

function foo() {
    return "bar";
}

```

In the example above, the function ``foo`` is declared and can be used throughout the entire code block it is defined in.

- Function Expression:

A function expression is an expression that defines a function and can be named or anonymous.

Example of a named function expression:

```javascript

var foo = function bar() {
    return "bar";
}

```

In the example above, the function `bar` is defined within the function expression `foo`. However, since JavaScript does not have block scope, the name `bar` is only accessible within the function body and can't be accessed from outside the function.

- Example of an anonymous function expression:

```javascript
var foo = function() {
    return "bar";
}
```
In the example above, the function expression `foo` does not have a name, which means it cannot be referenced within its own body.

### Hoisting in Function Declarations:

JavaScript function declarations are `hoisted`, meaning they can be called before they are defined in the code. This is not the case with function expressions, which need to be defined before they can be called.

-Example of hoisting in function declarations:

```javascript
foo(); // returns "bar"

function foo() {
    return "bar";
}
```
In the example above, `foo` is called before it is defined, but because it is a function declaration, it still works as expected.

In conclusion, while both `function declarations` and `function expressions` in JavaScript allow you to define and use functions, their syntax and usage differ, with function declarations having the additional property of `hoisting`.