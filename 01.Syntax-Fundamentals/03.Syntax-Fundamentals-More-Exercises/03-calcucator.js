function solve(num1,operator,num2) {
    result = eval(`${num1} ${operator} ${num2}`).toFixed(2)
    console.log(result)
}

solve(2,'+',3)
