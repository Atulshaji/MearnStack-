// var num=17;
// for(let i=2;i<num;i++){
//    if(num%i==0){
//        console.log("not prime");
//        break;
//    }
//    else{
//        console.log("prime");
//        break;
//    }
// }


var num=10;
flag=0;
for(let i=2;i<num;i++){
    if(num%i==0){
        flag+=1;
        break
    }
}
console.log(flag==0?"not prime":"prime");