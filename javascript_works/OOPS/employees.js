class employee{
    constructor(eid,e_name,salary,disig){
        this.eid=eid
        this.e_name=e_name
        this.disig=disig
        this.salary=salary
    }
}

var emp1=new employee(1000,"ram",25000,"developer")
var emp2=new employee(1001,"ravi",23000,"developer")
var emp3=new employee(1002,"raju",26000,"ba")
var employees=[]
employees.push(emp1,emp2,emp3)
// employees.filter(emp=>emp.disig=="developer").forEach(developer=>console.log(developer))
// employees.sort((emp1,emp2)=>emp1.salary-emp2.salary)
// console.log(employees);