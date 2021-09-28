var arr=[2,4,6,3]

var total=0;
for(let num of arr){
    total+=num
}

var op=[]
for(let num of arr){
   var number=total-num
    op.push(number)
}
console.log(op);