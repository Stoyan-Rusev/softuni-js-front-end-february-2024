function solve(pointArr) {
    function validityChecker(num1, num2, num3, num4) {
        let formulaResult = Math.sqrt((num3-num1)**2 + (num4-num2)**2);
        if (Number.isInteger(formulaResult)) {
            return `{${num1}, ${num2}} to {${num3}, ${num4}} is valid`;
        }

        return `{${num1}, ${num2}} to {${num3}, ${num4}} is invalid`;
    }

    let [x1, y1, x2, y2] = pointArr;
    console.log(validityChecker(x1, y1, 0, 0));
    console.log(validityChecker(x2, y2, 0, 0));
    console.log(validityChecker(x1, y1, x2, y2));
}


solve([3, 0, 0, 4]);
console.log('-----------');
solve([2, 1, 1, 1]);