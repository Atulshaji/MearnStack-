// var num=123;
// var dig1=(num-(num%100))/100;
// var dig2=((num%100)-(num%10))/10;
// var dig3=num%10;
// var num=dig1*100+dig2*10+dig3
// temp=dig1;
// dig1=dig3;
// dig3=temp;
// var num=dig1*100+dig2*10+dig3
// console.log(num);

// var num=123;
// while(num!=0){                 //123!=0
//     let digit=num%10;          // 123%10
//     console.log(digit);        // 3
//     num=Math.floor(num/10)     //123/10=12
// }

// var num=123;
// var res=""

// while(num!=0){                 //123!=0
//     let digit=num%10;          // 123%10
//     res+=digit                 //res=res+digit
//     num=Math.floor(num/10)     //123/10=12
// }
// console.log(res);        // 321


var num=123;
var res=0

while(num!=0){                 //123!=0
    let digit=num%10;          // 123%10
    res=res*10+digit                //0*10+3=3
    num=Math.floor(num/10)     //123/10=12
}
console.log(res);        // 321