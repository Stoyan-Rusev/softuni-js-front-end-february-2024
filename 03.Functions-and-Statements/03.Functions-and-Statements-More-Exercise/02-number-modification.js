function solve(num) {
    let strNum = String(num);

    while (true) {
        let sum = 0;
        for (let dig of strNum) {
            sum += Number(dig);
        }

        if (sum / strNum.length > 5) {
            break;
        }

        strNum += '9'
    }

    console.log(strNum);
}

solve(101);
solve(5835);