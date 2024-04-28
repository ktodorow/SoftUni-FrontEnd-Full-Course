function solve(num) {
    let sum = 0;
    let str = num.toString();
    let strLenght = str.length;

    for(let i = 0; i < strLenght; i++) {
        sum += Number(str[i]); //<--- i dont even know if i can do this but hopefully i can
    }

    console.log(sum);
}