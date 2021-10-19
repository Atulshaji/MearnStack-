// var st=new Set()
// st.add(10)
// st.add(20)
// st.add(20)
// console.log(st)

var test = "haaii hoooww"
var words = test.split(" ")
for(word of words){
    var wd = new Set()

    for(let char of word){
        wd.add(char)

    }
    console.log(wd);

}








