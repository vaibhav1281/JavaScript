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
**Example**

```javascript
var res = function sum(a,b){
    var ans = a+b;
    return ans;
}
res(2,6) // 8
```
In this code, `res` is a variable that is assigned a function named `sum`. This function takes two parameters, `a` and `b`, adds them together, and returns the result.

When you call `res(2,6)`, it invokes the `sum` function with `2` and `6` as arguments, adds them together to get `8`, and then returns that result.

So, `res(2,6)` will return `8`.

**Note**

Please note that the function name `sum` is not accessible outside the function itself. If you try to call `sum(2,6)`, it will result in a `ReferenceErro`r. To call the function, you should use the variable it was assigned to, which is `res` in this case.

**Summary**

In JavaScript, functions can take parameters, which are variables that are declared in the function definition. When a function is called, the arguments are the values that are passed to the function. The values of the arguments are assigned to the parameters, and the parameters can be used in the function.