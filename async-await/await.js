// Promise = An object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> resolved or rejected
//           new Promise(resolve, reject) => {asynchronous code}

// Do These Chores In Order
// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true

            if (dogWalked) {
                resolve("You walk the dog!");
            } else {
                reject("You didn't walk the dog!");
            }
        }, 1500);
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true

            if (kitchenCleaned) {
                resolve("You cleaned the kitchen!");
            } else {
                reject("You didn't clean the kitchen!")
            }
        }, 2500);
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = true

            if (trashTakenOut) {
                resolve("You take out the trash!");
            } else {
                reject("You didn't take out the trash!")
            }

        }, 500);
    })
}

async function doChores() {
    const walkDogResult = await walkDog()
    console.log(walkDogResult) // You walk the dog!

    const cleanKitchenResult = await cleanKitchen()
    console.log(cleanKitchenResult); //You cleaned the kitchen!

    const takeOutTrashResult = await takeOutTrash()
    console.log(takeOutTrashResult) //You take out the trash!

    console.log("You finished all the chores!");
}

doChores()