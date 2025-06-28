// class Department{
//   name:string;
//   private employee:string[]
//   constructor(n:string){
//     this.name=n;
//     this.employee=[]
//   }
//   dscribe(){
//     console.log("Department",this.name)
//   }
//   addemployee(emp:string){
//     this.employee.push(emp);
//   }
// }

// const acc= new Department("account");
// acc.dscribe();
// acc.addemployee("rahul");

//priva public access modifier
// class Department{
//   name:string;
//   private employee:string[];
//   private readonly id:string;
//   constructor(n:string){
//     this.name=n;
//     this.id="d2";
//     this.employee=[]
//   }
//   dscribe(){
//     console.log("Department",this.name)
//   }
//   addemployee(emp:string){
//     this.employee.push(emp);
//   }
//   printemployeeInformantio(){
//     console.log('Nummber f emp:',this.employee.length)
//     console.log(this.employee);
//   }
// }

// const acc= new Department("account");
// acc.dscribe();
// acc.addemployee("rahul");
// acc.printemployeeInformantio();

//inheritance

class Department{
  name:string;
  private employee:string[];
  private readonly id:string;
  constructor(id:string,n:string){
    this.name=n;
    this.id=id;
    this.employee=[]
  }
  dscribe(){
    console.log("Department",this.name)
  }
  addemployee(emp:string){
    this.employee.push(emp);
  }
  printemployeeInformantio(){
    console.log('Nummber f emp:',this.employee.length)
    console.log(this.employee);
  }
}

class AcountDepartMent extends Department{
 constructor(id:string,private reports:string[]){
  super(id,"account");
 }

 addreports(text:string){
  this.reports.push(text);
 }

 get getReportss(){
  if(this.reports.length>0){
    return this.reports;
  }

 
  throw new Error("Report not found .")
 }

  set setReports(value:string){
    if(!value){
      throw new Error("Please pass valid value")

    }
    this.reports.push(value);
  }

 printreposrt(){
  console.log(this.reports);
 }
}

const accdep= new AcountDepartMent("de",[]);
accdep.dscribe();
accdep.addreports("rahul");
accdep.printreposrt();


//getter and setter
console.log("getter->" ,accdep.getReportss);
accdep.setReports="Code review error";
console.log("getter->",accdep.getReportss);