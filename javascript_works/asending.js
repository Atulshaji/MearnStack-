var num1=40;
var num2=60;
var num3=30;

if(num1<num2 & num1<num3){
    if(num2<num3){
        console.log(`${num1}<${num2}<${num3}`);
    }
    else if(num2>num3){
        console.log(`${num1}<${num3}<${num2}`);
    }
}
else if(num2<num1 &num2<num3){
    if(num1<num3){
        console.log(`${num2}<${num1}<${num3}`);
    }
    else if(num1>num3){
        console.log(`${num2}<${num3}<${num1}`);
    }
}
else if(num3<num1 & num3<num2){
    if(num1<num2){
        console.log(`${num3}<${num1}<${num2}`);
    }
    else if(num1>num2){
        console.log(`${num3}<${num2}<${num1}`);
    }
}
