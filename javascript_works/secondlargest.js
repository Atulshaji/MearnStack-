var num1=10;
var num2=50;
var num3=30;

if((num1>num2 & num1<num3) | (num1<num2 & num1>num3)){
   console.log("num1 is second largest");

}
else if((num2>num1 & num2<num3) | (num2<num1 & num2>num3)){
    console.log("num2 is  secondlargest");
    
 }
 else if((num3>num1 & num3<num2) | (num3<num1 & num3>num2)){
    console.log("num3 is second largest");
    
 }
 