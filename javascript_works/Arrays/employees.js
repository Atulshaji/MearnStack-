var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
// var count=0;
// for(let employee of employees){
//     if(employee[3]=="developer"){
//         count++;
//     }
// }
// console.log(count);

var res=employees.filter(emp=>emp[3]=="developer").sort((emp1,emp2)=>(emp1[2]>emp2[2]))
console.log(res);

//Experience
// for(let employee of employees){
//     console.log(employee[5]-employee[4]);
// }

//number of employees
// console.log(employees.length);

//Highrst salary
// var highest_salary=0;
// for(let employee of employees){
//     if(highest_salary<employee[2]){
//         highest_salary=employee[2]
//     }
   
// }
// console.log(highest_salary);

//lowest salary

// var lowest_salary=employees[0][2]
// for(let employee of employees){
//     if(lowest_salary>employee[2])
//         {
//         lowest_salary=employee[2]
//     }
// }
// console.log("loewst salary",lowest_salary);





