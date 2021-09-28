var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
]


//number of products
// console.log(products.length);


//some  -  is any products available under 20
// var is_available=products.some(item=>item[2]<30)
// console.log(is_available);

//for each - name of products
// products.map(item=>item[1]).forEach(item=>console.log(item))

//name of products
// for(let product of products){
//     console.log(product[1]);
// }

// var product_names=products.map(item=>item[1])
// console.log(product_names);

//name of products in stock
// let available=0;
// for(let product of products){
//     if(product[3]>0){
//         available++
//     }
// }
// console.log(available);


// name of out of stock product
// var out_stock_name=products.filter(item=>item[3]==0).map(item=>item[1])
// console.log(out_stock_name);


//add offer 5rs for all products whose stock>50
// var offer=products.filter(item=>item[3]>50).map(item=>[item[1],item[2]-5])
// console.log(offer);


// var costly_product=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
// console.log(costly_product);

// var low_cost_product=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
// console.log(low_cost_product);

// var search=products.find(item=>item[1]=="treat")
// console.log(search);



