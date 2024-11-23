function solve(a, b) {
    function calculateFactorial(num) {
        let result = num;
        for (let i = num-1; i > 0; i--) {
            result *= i;
        }

        return result;
    }

    let factorialA = calculateFactorial(a);
    let factorialB = calculateFactorial(b);

    console.log((factorialA / factorialB).toFixed(2));
}

solve(5, 2);
console.log('------------');
solve(6, 2);