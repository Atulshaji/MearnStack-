class Student{
    constructor(rollno,course,stud_name){
        this.rollno=rollno
        this.course=course
        this.stud_name=stud_name
    }
    printStudent(){
        console.log(this.rollno,this.course,this.stud_name);
    }
}




var obj1 = new Student(01,"python","ram");
obj1.printStudent()

var obj2 = new Student(2,"java","akhil");

obj2.printStudent()