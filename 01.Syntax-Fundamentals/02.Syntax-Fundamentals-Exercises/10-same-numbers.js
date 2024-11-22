function solve(num) {
    let sum = 0;
    let isSame = true;
    let numberAsString = String(num);
    let firstDigit = numberAsString[0];

    for (let i=0; i<numberAsString.length; i++) {
        if (numberAsString[i] !== firstDigit) {
            isSame = false;
        }
        sum += Number(numberAsString[i]);
    }

    console.log(isSame);
    console.log(sum);
}

solve(222);