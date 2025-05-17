function add1(num1: number, num2: number,printeRsult:boolean,someText:String) {
  if(printeRsult){
    console.log(`${someText} ${num1+num2}`)
  }
  return num1 + num2;
}

var n1 = 20;
var n2 = 50;

const someText="hello raj";
const printresult=true;
 add1(n1, n2,printresult,someText);
