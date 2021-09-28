var expenses=[12000,13000,14000,15000,11000,25000,17000]

var highest=expenses[0];
for(let amount of expenses){
    if(highest<amount){
        highest=amount;
    }
}
console.log(highest);