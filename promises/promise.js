let myPromise = new promise(function (myResolve, myReject){
    // "Producing Code" (May take some time)

    myResolve(); // When successful
    myReject(); // When error
});

// "Consuming Code" (Must wait for a fulfilled promise)

// Here is how to use a Promise:
myPromise.then(
    // Promise.then() takes two arguments, a callback for success and another for failure.
    function (value) { /* code if successful */ },
    function (error) { /* code if some error */ }
);