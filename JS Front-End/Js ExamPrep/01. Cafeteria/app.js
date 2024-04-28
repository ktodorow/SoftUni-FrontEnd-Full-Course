function solve(array) {
    const baristaCount = Number(array.shift());
    let baristas = {};

    for (let i = 0; i < baristaCount; i++) {
        const [name, shift, coffeeTypes] = array.shift().split(' ');

        baristas[name] = {
            shift,
            coffeeTypes: coffeeTypes.split(','),
        }
    }

    let commandLine = array.shift();

    while(commandLine != 'Closed') {
        const commands = commandLine.split(' / ')

        const command = commands[0];
        const baristaName = commands[1];
        const currBaristaCoffees = baristas[baristaName].coffeeTypes;

        switch(command) {
            case 'Prepare': 
                const shift = commands[2];
                const coffeeType = commands[3];

                const currBaristaShift = baristas[baristaName].shift;

                if(currBaristaShift === shift && 
                    currBaristaCoffees.find(coffee => coffee === coffeeType)) {
                        console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
                }
                break;
            case 'Change Shift':
                const newShift = commands[2];
                baristas[baristaName].shift = newShift;
                console.log(`${baristaName} has updated his shift to: ${newShift}`);
                break;
            case 'Learn':
                const newCoffeeType = commands[2];

                if (currBaristaCoffees.find(coffee => coffee === newCoffeeType)) {
                    console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
                } else {
                    baristas[baristaName].coffeeTypes.push(newCoffeeType);
                    console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
                }
        }

        commandLine = array.shift();
    }

    for (const barista in baristas) {
        console.log(`Barista: ${barista}, Shift: ${baristas[barista].shift}, Drinks: ${baristas[barista].coffeeTypes.join(', ')}`);
    }
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed'
    ]
);