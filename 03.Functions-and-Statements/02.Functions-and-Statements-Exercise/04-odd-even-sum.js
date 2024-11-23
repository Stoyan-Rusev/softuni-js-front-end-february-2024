function solve(num) {
    let oddSum = 0;
    let evenSum = 0;
    let stringNum = num.toString();

    for (i = 0; i < stringNum.length; i++) {
        if (stringNum[i] % 2 === 0) {
            evenSum += Number(stringNum[i]);
        } else {
            oddSum += Number(stringNum[i]);
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(solve(1000435));
console.log(solve(3495892137259234));
