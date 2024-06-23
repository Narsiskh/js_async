// Here, 'myFunction' is used as a callback ,and it is passed to setTimeout() as an argument.
setTimeout(myFunction, 3000);
// 3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

function myFunction() {
    document.getElementById("demo3").innerHTML = "I love JavaScript!"
}

// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:

// setTimeout(function() { myFunction("I love You !!!"); }, 3000);
//
// function myFunction(value) {
//     document.getElementById("demo").innerHTML = value;
// }