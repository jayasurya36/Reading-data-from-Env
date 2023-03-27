var args = process.argv;
function getGreetings(val){
    return `Hello ${val}`
}

console.log(getGreetings(args[2]));