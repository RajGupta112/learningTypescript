//Union

// function combine1(num1:number | String , num2:number | String){
// if(typeof num1==="number"  && typeof num2 ==="number"){
//   return num1+num2;
// }else{
//   return num1.toString() + num2.toString();
// }
// }

// const sum1= combine(10,20);

// const combinedName1= combine("Raj", "Gupta");

// console.log(sum,combinedName);

//literal union

function combine1(num1:number | String , num2:number | String , conversionType:"as-number" | "as-string"){
if(typeof num1==="number"  && typeof num2 ==="number"){
  return num1+num2;
}else{
  return num1.toString() + num2.toString();
}
}

const sum1= combine(10,20,"as-number");

const combinedName1= combine("Raj", "Gupta","as-string");

console.log(sum,combinedName);