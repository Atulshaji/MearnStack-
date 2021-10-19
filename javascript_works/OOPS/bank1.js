class Bank {
    session = {}
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
    }

    validateAccountNumber(accno) {
        if (accno in this.accounts) {
            return true
        }
        else {
            return false
        }
    }

    authenticate(accno, password) {
        if (this.validateAccountNumber(accno)) {
            let pwd = this.accounts[accno].password;
            // pwd==password?1:0
            if (pwd == password) {
                this.session["user"] = accno
                console.log(this.session);
                return 1
            }
            else {
                return 0
            }

        }
        else {
            return -1;
        }
    }
    balanceEnquiry() {
        let user = this.session["user"]
        return this.accounts[user].balance

    }

    fundTransfer(to_accno, amount) {
        if (this.validateAccountNumber(to_accno)) {
            let user = this.session["user"]
            if (amount < this.balanceEnquiry()) {
                this.accounts[user].balance -= amount
                this.accounts[to_accno].balance += amount
                this.accounts[user].transactions.push({ to: to_accno, amount: amount })
                //   console.log(this.accounts[user].transactions);
                console.log("success");
            }
            else {
                console.log("insufficient balance");
            }

        }
        else {
            console.log("invalid acoount number");
        }

    }
    paymentHistory() {
        let user = this.session["user"]
        console.log(this.accounts[user].transactions);

    }
    getTransactions(){
        let transaction_history=[]
        for(let account in this.accounts){
            transaction_history.push(this.accounts[account].transactions)
        }
        return transaction_history
    }
    creditTranscations(){
        let transaction=this.getTransactions
        for(let trans of transaction){
            if(trans.to==this.session["user"]){
                
            }
        }
    
    }
}

var obj = new Bank()
obj.authenticate(1001, "userone")
console.log(obj.balanceEnquiry());

obj.fundTransfer(1002, 3000)
obj.paymentHistory()

obj.creditTranscations()