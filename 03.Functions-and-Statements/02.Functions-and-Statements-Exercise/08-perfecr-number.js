function solve(number) {
    let divisors = [];
    let divisorsSum = 0;
    for (i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            divisors.push(i);
            divisorsSum += i;
        }
    }

    if (number === divisorsSum) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

solve(6);
solve(1236498);