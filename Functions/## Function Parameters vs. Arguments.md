 **Function Parameters vs. Arguments**

In JavaScript, functions can take parameters, which are variables that are declared in the function definition. When a function is called, the arguments are the values that are passed to the function.

The following code defines a function called `a` that takes two parameters, `param1` and `param2`.

```javascript
var a = function(param1, param2) {
    console.log("a is called");
};
```

When the function `a` is called, the arguments are the values that are passed to the function. In the following example, the arguments are `1` and `2`.

```javascript
a(1, 2);
```

When the function `a` is called, the values of the arguments are assigned to the parameters. In this case, the value of `1` is assigned to the parameter `param1`, and the value of `2` is assigned to the parameter `param2`.

The following code shows how the values of the parameters are used in the function.

```javascript
var a = function(param1, param2) {
    console.log("param1 is", param1);
    console.log("param2 is", param2);
};

a(1, 2);
```

When the function `a` is called, the values of the parameters are printed to the console. The output of the function is as follows:

```
param1 is 1
param2 is 2
```

**Summary**

In JavaScript, functions can take parameters, which are variables that are declared in the function definition. When a function is called, the arguments are the values that are passed to the function. The values of the arguments are assigned to the parameters, and the parameters can be used in the function.