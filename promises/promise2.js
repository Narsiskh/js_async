// Promise = An object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> resolved or rejected
//           new Promise(resolve, reject) => {asynchronous code}

// Do These Chores In Order
// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

function walkDog(callback) {
    setTimeout(() => {
        console.log("You walk the dog!");
        callback();
    }, 1500)
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("You clean the kitchen!");
        callback();
    }, 2500)
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log("You take out the trash!");
        callback();
    }, 500)
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log("You finished all the chores!"));
    });
});

