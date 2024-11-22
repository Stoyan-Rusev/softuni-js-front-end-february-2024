function solve(x1,y1,x2,y2) {
    const x3 = 0;
    const y3 = 0;

    function formula(num1, num2, num3, num4) {
        let result = Math.sqrt((num3-num1)**2 + (num4-num2)**2)
        if (result % 1 === 0) {
            console.log(`{${num1}, ${num2}} to {${num3}, ${num4}} is valid`);
        } else {
            console.log(`{${num1}, ${num2}} to {${num3}, ${num4}} is invalid`);
        }
    }

    formula(x1,y1,x3,y3)
    formula(x2,y2,x3,y3)
    formula(x1,y1,x2,y2)
}

solve(3, 0, 0, 4)
console.log('-------------------------')
solve(2, 1, 1, 1)
