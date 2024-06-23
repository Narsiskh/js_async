function yourDisplayer(something) {
    document.getElementById("demo2").innerHTML = something;
}

function yourCalculator(num1, num2, yourCallback) {
    let sum = num1 + num2;
    yourCallback(sum);
}

// When you pass a function as an argument, remember not to use parenthesis.
yourCalculator(5, 5, yourDisplayer) // 10