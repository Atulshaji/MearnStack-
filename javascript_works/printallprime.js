
for(let i=4;i<=25;i++){
      let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag++;
            break;
        }
       
        }
        if(flag==0){
            console.log(i);
        }
}