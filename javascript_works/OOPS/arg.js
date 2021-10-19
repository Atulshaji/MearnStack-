// function add(...args){
//     return args.reduce((num1,num2)=>num1+num2)
// }

// console.log(add(10,15,20,25));


function getMax(...args){
    return args.reduce((num1,num2)=>num1>num2?num1:num2)
}
console.log(getMax(10,15,20));



