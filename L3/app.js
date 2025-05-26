//Union
function combine(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
var sum = combine(10, 20);
var combinedName = combine("Raj", "Gupta");
console.log(sum, combinedName);
