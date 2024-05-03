import inquirer from "inquirer";

// Initialize user balance and pin code.
let myBalance = 100000;
let myPin = 6776;

//Print Welcome message.
console.log("Welcome to Rashid ATM.");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your P.I.N",
    }
])
if (pinAnswer.pin === myPin){
    console.log("P.I.N is correct.");
    //console.log(`You Current Balance is ${myBalance}`);
   
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Balance Check", "Withdraw Cash"]
        }
])

    if(operationAns.operation === "Withdraw Cash"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the withdraw amount:",
            }
        ])
        if (amountAns.amount > myBalance){
                console.log("Insufficient Balance.");
            }
            else{
                myBalance -= amountAns.amount;
                console.log(`${amountAns.Amount } withdrawn successfully.`);
                console.log(`Your remaining balance is: ${ myBalance }`);
            }
        }
	else if(operationAns.operation === "Balance Check"){
	console.log(`Your Account Balance is: ${ myBalance }.`);
    }
}
else{
	console.log("P.I.N is incorrect, try again.");
}
