// base class "Account" with common properties like (Acc_no) and (balance),
//  and methods to credit, debit, and get balance. Two derived classes, 
// SavingsAccount and CurrentAccount, implement the IAccount interface,
//  which defines a Date_of_Opening property and methods to add and remove customers.

interface IAccount {
  Date_of_Opening: Date;
  addCustomer(name: string): void;
  removeCustomer(name: string): void;
}


class Account {

    Acc_no:number;
    balance:number;

    constructor(Acc_no:number, balance:number) {
        this.Acc_no = Acc_no;
        this.balance = balance;
    }
    // السحب
    debitAmount(amount:number):void {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log(`Debited ${amount}. New balance is ${this.balance}`);
        }
    }
    // الإيداع
    creditAmount(amount:number):void {
        this.balance += amount;
        console.log(`Credited ${amount}. New balance is ${this.balance}`);
    }
    getBalance():number {
        return this.balance;
    }
  }
  class SavingsAccount extends Account implements IAccount {
    Date_of_Opening: Date;
    customers: string[] = [];

    constructor(Acc_no: number, balance: number, Date_of_Opening: Date) {
        super(Acc_no, balance);
        this.Date_of_Opening = Date_of_Opening;
    }

    addCustomer(name: string): void {
        this.customers.push(name);
        console.log(`Customer ${name} added.`);
    }

    //  لو -1   يبقي مش موجود
    removeCustomer(name: string): void {
        const index = this.customers.indexOf(name);
        if (index > -1) {
            this.customers.splice(index, 1);
            console.log(`Customer ${name} removed.`);
        } else {
            console.log(`Customer ${name} not found.`);
        }
    }
  }
  class CurrentAccount extends Account implements IAccount {
    Date_of_Opening: Date;
    customers: string[] = [];

    constructor(Acc_no: number, balance: number, Date_of_Opening: Date) {
        super(Acc_no, balance);
        this.Date_of_Opening = Date_of_Opening;
    }

    addCustomer(name: string): void {
        this.customers.push(name);
        console.log(`Customer ${name} added.`);
    }

    removeCustomer(name: string): void {
        const index = this.customers.indexOf(name);
        if (index > -1) {
            this.customers.splice(index, 1);
            console.log(`Customer ${name} removed.`);
        } else {
            console.log(`Customer ${name} not found.`);
        }
    }
  }

// Create a savings account
const savingsAcc = new SavingsAccount(1001, 5000, new Date("2024-01-01"));

console.log("---- Savings Account ----");

// Add customers
savingsAcc.addCustomer("Ali");
savingsAcc.addCustomer("Mona");

// Remove customer
savingsAcc.removeCustomer("Ali");

// Attempt to remove non-existent customer
savingsAcc.removeCustomer("Youssef");

// Debit and Credit operations
savingsAcc.creditAmount(2000);  // should add 2000 to balance
savingsAcc.getBalance();  // should return the current balance
savingsAcc.debitAmount(1000);   // should subtract 1000 from balance

// Check balance
console.log("Current Balance:", savingsAcc.getBalance());


// Create a current account
const currentAcc = new CurrentAccount(2002, 10000, new Date("2023-06-15"));

console.log("\n---- Current Account ----");

// Add customers
currentAcc.addCustomer("Sara");
currentAcc.addCustomer("Ahmed");

// Remove a customer
currentAcc.removeCustomer("Sara");

// Try to remove someone who doesn't exist
currentAcc.removeCustomer("John");

// Credit and debit
currentAcc.creditAmount(3000);
currentAcc.debitAmount(5000);

// Final balance
console.log("Current Balance:", currentAcc.getBalance());



