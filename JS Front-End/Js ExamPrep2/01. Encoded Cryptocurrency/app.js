function solve(array) {
    let message = array.shift();

    let commandLine = array.shift();

    while(commandLine != 'Buy') {
        const commandArgs = commandLine.split('?');

        const currCommand = commandArgs[0]; 

        switch (currCommand) {
            case 'TakeEven':
                con
                break;
        
            default:
                break;
        }
        commandLine = array.shift();
    }
}

solve([
    "z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"
]);