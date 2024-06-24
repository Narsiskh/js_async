# JavaScript Async
Learning about JS callbacks, JS asyncronous, JS promises, and JS async/await.

## JS Callbacks
* A callback is a function passed as an argument to another function

* This technique allows a function to call another function

* A callback function can run after another function has finished

### Function Sequence
JavaScript`s functions are executed in the sequence they are called. Not in the sequence they are defined.

## JS Asynchronous
* Functions running in **parallel** with other functions are called **asynchronous**.

### Callback Alternative
With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallel.
But, asynchronous programmes are difficult to write and difficult to debug.
Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using **Promises** instead.

## JS Promise
* A Promise is an Object that links Producing code and Consuming code.
* A Promise contains both the producing code and calls to the consuming code.
* When the producing code obtains the result, it should call one of the two callbacks:

| When    | Call                    |
|---------|-------------------------|
| Success | myResolve(result value) |
| Error   | myReject(error object)  |

### Promise Object Properties
A JavaScript Promise object can be:
* Pending
* Fulfilled
* Rejected

The Promise object supports two properties: **_state_** and **_result_**.
* While a Promise object is "pending" (working), the result is **undefined**.
* When a Promise object is "fulfilled", the result is a **value**.
* When a Promise object is "rejected", the result is an **error** object.

! You cannot access the Promise properties state and result.

! You must use a Promise method to handle promises.

## JS Async
**Async** and **Await** make promises easier to write.

### Async Syntax
The keyword `async` before a function makes the function return a promise.

### Await Syntax
The `await` keyword can only be used inside an `async` function.
```javascript
let value = await promise;
```
