function myResult(some) {
    document.getElementById("demo1").innerHTML = some;
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum
}

let result = myCalculator(5, 5);
myResult(result); //10

// The problem with the example above, is that you have to call two functions to display the result.