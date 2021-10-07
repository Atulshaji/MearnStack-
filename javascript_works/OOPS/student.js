class Student{
    setStudent(rollno,course,stud_name){
        this.rollno=rollno
        this.course=course
        this.stud_name=stud_name
    }
    printStudent(){
        console.log(this.rollno,this.course,this.stud_name);
    }
}

// this.rollno ,this.course => instance variable
// rollno , course => local variable
//setStudent => initialising instance variabkes
//printStudent => print instance variables

//constructor => initialising instance variabkes


var obj1 = new Student();
obj1.setStudent(01,"python","ram")
// obj1.printStudent()

// var obj2 = new Student();
// obj2.setStudent(2,"python","akhil")
// obj2.printStudent()

// console.log(obj1.course,obj1.rollno);


