function checkSameNumbers(num) {
    let singleNum;
    let sum = 0;
    let str = num.toString();
    let strLenght = str.length;
    let flag = true;

    for(let i = 0; i < strLenght; i++) {
        singleNum = str[0];

        if (singleNum != str[i]) {
            flag = false;
            console.log(false);
            break;
        }
    }

    for(let i = 0; i < strLenght; i++) {
        sum += Number(str[i]);
    }

    if (flag) {
        console.log(flag);
    }

    console.log(sum);
}