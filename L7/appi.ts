console.log("Type Guards")

type Combinable=string | number
type Numaeric = number | boolean;
type Universal= Combinable & Numaeric;

function add(a:Combinable, b:Combinable){
  if(typeof a ==="string" || typeof b==="string"){
    return a.toString() +b.toString();
  }
  return a+b;
}
console.log(add(30,30));
console.log(add("50",30));



type Admin={
  name:string;
  preivilages:string[];
}

type Employee ={
  name:string;
  startDate:Date;
}
type ElevatedEmployee =Admin & Employee;

type UnknownEmployee = Employee | Admin;

const emp1:ElevatedEmployee ={
  name:"raj gupta",
  preivilages:['create-server'],
  startDate:new Date(),
}

function printEmployeeInformation(emp:UnknownEmployee){
  console.log("Name:",emp.name)
  // console.log("privilages:",emp.privilages)
  if('preivilages' in emp){
    console.log(emp.preivilages);
  
  }

  if('startDate' in emp){
    console.log(emp.startDate);
  }
}

class Car{
  drive(){
    console.log("drive")
  }
}

class Truck{
  drive(){
    console.log("driving truck")
  }

  loadCargo(amount:number){
    console.log("Loading cargo...",amount)
  }
}

type Vechile= Car | Truck;
const v1= new Car();
const v2= new Truck();

function useVehile(vechile:Vechile){
  vechile.drive();

  if('loadCargo' in vechile){
   vechile.loadCargo(500);
  }
}
  
//type assertion or casting 

// const user=<HTMLInputElement>document.getElementById("user-input")!;

const user=<HTMLInputElement>document.getElementById("user-input")! as HTMLInputElement;

user.value="hellobhb"
