"use strict";
let user;
user = {
    name: "rak",
    age: 31,
    greet(Text) {
        console.log(`${Text} ${this.name}`);
    }
};
console.log(user);
class Rerson {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text},${this.name}`);
    }
}
let user1;
user1 = new Rerson("Patel");
console.log(user1);
