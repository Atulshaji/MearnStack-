// class Parent{
//     phone(){
//         console.log("redmi");
//     }
// }
// class Child extends Parent{
//     phone(){
//         console.log("iphone");
//     }
// }

// var child=new Child()
// child.phone()

//multi level inheritance
// class Parent{
//     m1(){
//         console.log(m1);
//     }
// }
// class Child extends Parent{
//     m2(){
//         console.log(m2);
//     }
// }
// class Subchild extends Child{
//     m3(){
//         console.log(m3);
//     }
// }

// var sc =new Subchild()
// sc.m1()
// sc.m2()
// sc.m3()

// var ch=new Child
// ch.m1()
// ch.m2()

// var pa=new Parent
// ch.m1()


class Parent{
    phone(){
        console.log("redmi");
    }
}
class Child extends Parent{
    phone(){
        super.phone()
        console.log("iphone");
    }
}

var child=new Child()
child.phone()