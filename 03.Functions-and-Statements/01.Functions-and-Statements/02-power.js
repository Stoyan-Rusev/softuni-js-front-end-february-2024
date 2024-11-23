function solve(number, power) {
    let result = 1;
    for (i = 0; i < power; i++) {
        result *= number;
    }

    console.log(result);
}

solve(2, 8);