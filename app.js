function add1(num1, num2, printeRsult, someText) {
    if (printeRsult) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
    return num1 + num2;
}
var n1 = 20;
var n2 = 50;
var someText = "hello raj";
var printresult = true;
add1(n1, n2, printresult, someText);
