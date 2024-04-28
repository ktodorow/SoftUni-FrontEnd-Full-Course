function solve(start, end) {
    let sum = 0;
    let str = '';

    for (let i = start; i <= end; i++) {
        str += `${i} `;
        sum += i;
    }
    
    console.log(str);
    console.log(`Sum: ${sum}`);
}