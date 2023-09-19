// console.log("Hello");


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import ListPrompt from "inquirer/lib/prompts/list.js";

const stop = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000)
    })
}

async function welcome() {
    let welMsg = chalkAnimation.rainbow('Welcome \n \t Lets Start Calulation\n\t Devolp by Mian Haroon');
    await stop();
    welMsg.stop();
    console.log(` _____________________
|  _________________  |
| |                 | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);

}
 await welcome();



async function calulation() {

    let cal = await inquirer.prompt([
        {
            type: "number",
            name: "number1",
            message: "Enter First Number" 
        },
        {
            type: "number",
            name: "number2",
            message: "Enter Secound Number"
        },
        {
            type: "list",
            name: "operation",
            message: "Which operation do you want",
            choices: ["Addition", "Substraction", "Multiplication", "Modulus", "Divison", "Exponant"]
        }

    ])
        .then((answers) => {
            if (answers.operation == "Addition") {
                
                console.log(chalk.green.bgGray.bold.italic(`${answers.number1} + ${answers.number2} = ${answers.number1+answers.number2} `));
            }

            else if (answers.operation == "Substraction") {
                let resultSub = answers.number1 - answers.number2
                console.log(chalk.yellow.bgGray.bold.italic(`${answers.number1} - ${answers.number2} = ${resultSub} `));
            }
            else if (answers.operation == "Multiplication") {
                let resultMul = answers.number1 * answers.number2
                console.log(chalk.red.bgGray.bold.italic(`${answers.number1} * ${answers.number2} = ${resultMul} `));
            }
            else if (answers.operation == "Divison") {
                let resultDiv = answers.number1 / answers.number2
                console.log(chalk.blue.bgGray.bold.italic(`${answers.number1} / ${answers.number2} = ${resultDiv} `));
            }

            else if (answers.operation == "Modulus") {
                let resultMod = answers.number1 % answers.number2
                console.log(chalk.magenta.bgGray.bold.italic(`${answers.number1} % ${answers.number2} = ${resultMod} `));
            }

            else if (answers.operation == "Exponant") {
                const result = Math.pow(answers.number1, answers.number2);
                console.log(chalk.cyan.bgGray.bold.italic(`${answers.number1} raised to the power of ${answers.number2} is ${result}`))
            };
        }
        )}




calulation();


