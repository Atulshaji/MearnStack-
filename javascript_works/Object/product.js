var product={p_code:100,p_name:"product1",price:250,aval_qty:50}

console.log(product.p_name);

product.aval_qty+=30;
console.log(product.price);

console.log("discount" in product);

product.discount="10%"
console.log(product);

