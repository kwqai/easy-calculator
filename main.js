#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to persorm action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Percentage", "Exponentiation", "Square Root"],
    },
]);
//  console.log(answer);
//   Conditional Statement:
if (answer.operator === "Addition") {
    //  console.log("Your value is " + answer.firstNumber + answer.secondNumber);
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Percentage") {
    const percentage = (answer.firstNumber / 100) * answer.secondNumber;
    console.log(percentage);
}
else if (answer.operator === "Exponentiation") {
    console.log(Math.pow(answer.firstNumber, answer.secondNumber));
}
else if (answer.operator === "Square Root") {
    console.log(Math.sqrt(answer.firstNumber));
}
else {
    console.log("please enter valid operator");
}
