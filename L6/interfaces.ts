

  //interfaces
interface Person{
  name:string;
  age:Number;
  greet(text:String):void
}

let user:Person;

user={
  name:"rak",
  age:31,
  greet(Text):void{
  console.log(`${Text} ${this.name}`);
  }
}

console.log(user)




interface Named {
  readonly name:string;
}

interface Greetable extends Named{
  greet(text:string):void;
}

class Rerson implements Greetable{
  name: string;
  constructor(n:string){
    this.name=n;
  }

  greet(text:string):void{
    console.log(`${text},${this.name}`)
  }

}
let user1 :Greetable;
user1= new Rerson("Patel");
console.log(user1);