function cooking(string, firstOperation, secondOperation, thirdOperation, fourthOperation, fifthOperation) {
    let opeartionsString = `${firstOperation} ` + `${secondOperation} ` + `${thirdOperation} ` + `${fourthOperation} ` + `${fifthOperation}`;
    
    let operations = opeartionsString.split(' ');
    let number = Number(string);

    for(let i = 0; i < operations.length; i++) {
        
        switch(operations[i]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 0.2;
                break;
        }

        console.log(number);
    }
}