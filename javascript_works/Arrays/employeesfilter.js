var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

// var developers=employees.filter(emp=>emp[3]=="developer")
// console.log(developers.length);

// var analysts=employees.filter(emp=>emp[3]=="ba").map(emp=>emp[1])
//     console.log(analysts);


//map and filter
// var developers=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[1])
// console.log(developers);


// 2 condition and map
//print developers name experience greater than 6 years
var developers=employees.filter (emp=>(emp[3]=="developer")&(emp[5]-emp[4]>6)).map(emp=>emp[1])
console.log(developers);

