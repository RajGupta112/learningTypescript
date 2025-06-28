console.log("Type Guards");
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(30, 30));
console.log(add("50", 30));
