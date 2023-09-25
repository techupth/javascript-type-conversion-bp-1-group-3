// Exercise #1: Debugging
// Start code here
let accountBalance = 400;
let depositAmountFromUser = "10";
 type-conversion-by-Pam
accountBalance = accountBalance + Number(depositAmountFromUser);
let accountBalanceMessage = (`You account balance is ${accountBalance}`);

depositAmountFromUser = Number(depositAmountFromUser);
accountBalance = accountBalance + depositAmountFromUser;

let accountBalanceMessage = `Your account balance is ${accountBalance}`;

main
console.log(accountBalanceMessage);

