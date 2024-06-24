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