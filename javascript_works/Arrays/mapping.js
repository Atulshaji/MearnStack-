// if <5 ?-1 >5?+1 =5 5
var arr=[2,3,4,5,6,7,8]
var op=[]
for(num of arr){
    // if(num<5){
    //     op.push(num-1)
    // }
    // else if(num>5){
    //     op.push(num+1)
    // }
    // else{
    //     op.push(num)
    // }
    num<5?op.push(num-1):num>5?op.push(num+1):op.push(num)
}
console.log(op);