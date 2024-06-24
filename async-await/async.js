function myDisplayer(some) {
    document.getElementById("demo7").innerHTML = some;
}

async function myFunc() {
    return "Hello";
}
// Is the same as:
// function myFunction() {
//     return Promise.resolve("Hello");
// }

myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);