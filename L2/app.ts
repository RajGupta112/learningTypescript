

//objects and array
// var person :{
//   firstName:String;
//   age:number;
//   skills:String[];
// }={
//   firstName:"Raj",
//   age:21,
//   skills:["reactjs","java"]
// }

// let favoratelist:string[];
// favoratelist=["raj","ropak"];

// console.log(person)


//tuple
const person:{
  name:string;
  age:number;
  product:[number,string];
}={
  name:"raj",
  age:15,
  product:[10,"hello"]
}

//enum

enum Role{Admin,Author}
const perso={
  name:"raj",
  age:15,
  product:[10,"hello"],
  role:Role.Admin
}

if(perso.role===Role.Author){
  console.log("author");
}else{
  console.log("admin");
}