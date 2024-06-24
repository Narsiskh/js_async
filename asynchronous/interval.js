// When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    document.getElementById("demo4").innerHTML =
    d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
}