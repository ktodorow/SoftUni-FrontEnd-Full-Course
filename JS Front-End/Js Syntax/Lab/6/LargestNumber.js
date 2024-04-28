function findLargestNumber(firstNum, secondNum, thirdNum) {
    let largestNumber;

    if (firstNum > secondNum && firstNum > thirdNum) {
        largestNumber = firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        largestNumber = secondNum;
    } else if (thirdNum > secondNum && thirdNum > firstNum) {
        largestNumber = thirdNum;
    }

    console.log(largestNumber);
}

findLargestNumber(-270, 450, 230);