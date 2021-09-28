var expenses=[12000,13000,14000,15000,11000,25000,17000]

var lowest=expenses[0];
for(let amount of expenses){
    if(lowest>amount){
        lowest=amount;
    }
}
console.log(lowest);