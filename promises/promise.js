function myFunction(some) {
    document.getElementById("demo6").innerText = some;
}

let myPromise = new Promise(function (myResolve, myReject){
    let x = 0;

    // Some code (try to change x to 5)
    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

// Here is how to use a Promise:
myPromise.then(
    // Promise.then() takes two arguments, a callback for success and another for failure.
    function (value) { myFunction(value) },
    function (error) { myFunction(error) }
);