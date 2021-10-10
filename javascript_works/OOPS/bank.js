class BAnk{
    createAccount(p_name,acno,ac_type,min_bal){
    this.p_name=p_name
    this.acno=acno
    this.ac_type=ac_type
    this.balance=min_bal             
}
deposit(amount){
    this.balance+=amount
    console.log(`your acno ${this.acno} is credited with ${amount}
    available balance is ${this.balance}`);
}
withdrawal(amount){
    if(this.balance>amount){
    this.balance-=amount
    console.log(`your acno ${this.acno} is credited with ${amount}
    available balance is ${this.balance}`);
    }
    else{
      console.log("insufficient balance");
    }
}
}

var obj1=new BAnk();
obj1.createAccount("akhil",1000,"savings",3000)
obj1.deposit(10000)
obj1.withdrawal(12000)

