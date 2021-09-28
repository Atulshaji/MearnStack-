for(let row=0;row<4;row++){
    str=""
    for(space=0;space<4-row-1;space++){
        str+=" "
    }
    for(col=0;col<row+1;col++){
        str+="* "
    }
    console.log(str);
}