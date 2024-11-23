function solve(grade) {
    let message = '';
    if (grade < 3) {
        message = `Fail (2)`;
    } else if (grade < 3.50) {
        message = `Poor (${grade.toFixed(2)})`;
    } else if (grade < 4.50) {
        message = `Good (${grade.toFixed(2)})`;
    } else if (grade < 5.50) {
        message = `Very good (${grade.toFixed(2)})`;
    } else if (grade <= 6.00) {
        message = `Excellent (${grade.toFixed(2)})`;
    }

    console.log(message)
}

solve(4.50)
