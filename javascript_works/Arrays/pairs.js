var arr=[2,3,4,5]
var elem_pair=6;
for(let i=0;i<arr.lenght;i++){
    for(let j=i+1;j<arr.lenght;j++){
        if(arr[i]+arr[j]==elem_pair){
            console.log(`element pair ${arr[i]} ${arr[j]}`);
            break;
        }
        
    }
}