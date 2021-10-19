class Library{
    books={
        "halfgirlfriend":{book_name:"halfgirlfriend",author:"chethan bagath",price:300,avl_copies:300,copies_sol:200},
        "randamoozham":{book_name:"randamoozham",author:"mt",price:350,avl_copies:250,copies_sol:200},
        "the alchemist":{book_name:"the alchemist",author:"paulo",price:400,avl_copies:250,copies_sol:200}

    }
    findBook(book_name){
        if(book_name in this.books){
            if(this.books[book_name].avl_copies>0){
            console.log(this.books[book_name]); 
            }
            else{
                console.log("out of stock");
            }
        }
        else{
            console.log("not available");
        }
    }
    filterBook(){
        for(let book_names in this.books){
      var sort = Object.entries(this.books).sort((book1,book2)=>book1-book2)
      console.log(sort);
    }
    }
}
var obj = new Library
obj.findBook("halfgirlfriend")
obj.filterBook()