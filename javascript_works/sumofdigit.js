// var num=123;
// var dig1=(num-(num%100))/100;
// var dig2=((num%100)-(num%10))/10;
// var dig3=num%10;
// var num=dig1*100+dig2*10+dig3
// sum=dig1**3+dig2**3+dig3**3
// console.log(sum);

var num=123;
var res=0;

while(num!=0){                 //123!=0
    let digit=num%10;          // 123%10
    res=res+digit**3;                //0*10+3=3
    num=Math.floor(num/10)     //123/10=12
}
console.log(res);        