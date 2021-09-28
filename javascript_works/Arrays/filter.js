var arr=[2,3,4,5,6,7]

// var odd=arr.filter(nums=>nums%2!=0)
// console.log(odd);

//print square of even numbers

var even_square=arr.filter(num=>num%2==0).map(num=>num**2)
console.log(even_square);