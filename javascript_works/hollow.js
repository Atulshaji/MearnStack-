for(let row=0;row<4;row++){
    for(let col=0;col<6;col++){
        if(row+col==3){
            console.log("*");
        }
        else if(col-row==3){
            console.log("*");
        }
        else{
         console.log( );
        }
    }
}