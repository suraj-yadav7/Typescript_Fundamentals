/** ENCAPSULATION */
// Encapsulation is a (OOPs) principle of bundling an object's data (attributes) and methods (functions) into a single unit (class),
// while restricting direct access to some of the object's components. This is typically achieved using access modifiers like private or protected,
// which hide the internal details of the class, allowing controlled access and modification through public methods such as getters and setters.
// Encapsulation ensures data integrity, enhances security, and promotes modular design by preventing unintended interference with the object's state.
var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolder, accountNumber, balance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber,
            this.balance = balance;
    }
    // public method to getbalance of account
    BankAccount.prototype.getBalance = function () {
        console.log("".concat(this.accountHolder, " with ").concat(this.accountNumber, " your total balance is: ").concat(this.balance));
        return this.balance;
    };
    // public method to deposit
    BankAccount.prototype.deposit = function (amount) {
        if (amount >= 100) {
            this.balance += amount;
            console.log("Amount successfully deposited");
        }
        else {
            console.log("Minimum deposit amount is 100");
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    return BankAccount;
}());
var personOneAcc = new BankAccount("praneeth", 34765237, 25000);
// public accessible
console.log("Account Holder Name: ", personOneAcc.accountHolder);
// private propety not accessible
// console.log("Account Holder Number: ", personOneAcc.accountNumber)
// get bank balance
personOneAcc.getBalance();
personOneAcc.deposit(5000);
personOneAcc.withdraw(1000);
personOneAcc.getBalance();
