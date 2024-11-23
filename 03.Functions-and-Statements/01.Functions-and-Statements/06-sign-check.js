function solve(a, b, c) {
    let negativeCounter = 0;
    let result = '';

    for (num of [a, b, c]) {
        if (num < 0) {
            negativeCounter++;
        }
    }

    if (negativeCounter % 2 === 0) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }

    return result;
}

console.log(solve(5, 12, -15));