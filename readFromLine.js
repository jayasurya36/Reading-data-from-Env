const readLine = require("readline");
const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

let userInput = ""

rl.question("enter your Name:\n" , (string) => {
    userInput = string
    console.log("Hello "+userInput);
    rl.close();
});