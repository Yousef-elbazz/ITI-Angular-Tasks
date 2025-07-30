// base class "Account" with common properties like (Acc_no) and (balance),
//  and methods to credit, debit, and get balance. Two derived classes, 
// SavingsAccount and CurrentAccount, implement the IAccount interface,
//  which defines a Date_of_Opening property and methods to add and remove customers.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(Acc_no, balance) {
        this.Acc_no = Acc_no;
        this.balance = balance;
    }
    // السحب
    Account.prototype.debitAmount = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        }
        else {
            this.balance -= amount;
            console.log("Debited ".concat(amount, ". New balance is ").concat(this.balance));
        }
    };
    // الإيداع
    Account.prototype.creditAmount = function (amount) {
        this.balance += amount;
        console.log("Credited ".concat(amount, ". New balance is ").concat(this.balance));
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(Acc_no, balance, Date_of_Opening) {
        var _this = _super.call(this, Acc_no, balance) || this;
        _this.customers = [];
        _this.Date_of_Opening = Date_of_Opening;
        return _this;
    }
    SavingsAccount.prototype.addCustomer = function (name) {
        this.customers.push(name);
        console.log("Customer ".concat(name, " added."));
    };
    //  لو -1   يبقي مش موجود
    SavingsAccount.prototype.removeCustomer = function (name) {
        var index = this.customers.indexOf(name);
        if (index > -1) {
            this.customers.splice(index, 1);
            console.log("Customer ".concat(name, " removed."));
        }
        else {
            console.log("Customer ".concat(name, " not found."));
        }
    };
    return SavingsAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(Acc_no, balance, Date_of_Opening) {
        var _this = _super.call(this, Acc_no, balance) || this;
        _this.customers = [];
        _this.Date_of_Opening = Date_of_Opening;
        return _this;
    }
    CurrentAccount.prototype.addCustomer = function (name) {
        this.customers.push(name);
        console.log("Customer ".concat(name, " added."));
    };
    CurrentAccount.prototype.removeCustomer = function (name) {
        var index = this.customers.indexOf(name);
        if (index > -1) {
            this.customers.splice(index, 1);
            console.log("Customer ".concat(name, " removed."));
        }
        else {
            console.log("Customer ".concat(name, " not found."));
        }
    };
    return CurrentAccount;
}(Account));
// Create a savings account
var savingsAcc = new SavingsAccount(1001, 5000, new Date("2024-01-01"));
console.log("---- Savings Account ----");
// Add customers
savingsAcc.addCustomer("Ali");
savingsAcc.addCustomer("Mona");
// Remove customer
savingsAcc.removeCustomer("Ali");
// Attempt to remove non-existent customer
savingsAcc.removeCustomer("Youssef");
// Debit and Credit operations
savingsAcc.creditAmount(2000); // should add 2000 to balance
savingsAcc.getBalance(); // should return the current balance
savingsAcc.debitAmount(1000); // should subtract 1000 from balance
// Check balance
console.log("Current Balance:", savingsAcc.getBalance());
// Create a current account
var currentAcc = new CurrentAccount(2002, 10000, new Date("2023-06-15"));
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
