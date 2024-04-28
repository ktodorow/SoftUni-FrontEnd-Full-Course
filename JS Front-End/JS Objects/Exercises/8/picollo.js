function solve(input) {
    const parkingLot= new Set();

    for (const line of input) {
        const [direction, carNumber] = line.split(', ');   
        
        direction === 'IN'
            ? parkingLot.add(carNumber)
            : parkingLot.delete(carNumber);
    }

    if(parkingLot.size < 1) {
        return console.log('Parking Lot is Empty')
    } 

    Array.from(parkingLot.values())
        .sort((a,b) => a.localeCompare(b))
        .forEach(car => console.log(car));
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)