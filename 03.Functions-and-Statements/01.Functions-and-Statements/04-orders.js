function solve(product, quantity) {
    let currentPrice = 0;
    let total = 0;
    
    if (product === 'coffee') {
        currentPrice = 1.50;
    } else if (product === 'water') {
        currentPrice = 1.00;
    } else if (product === 'coke') {
        currentPrice = 1.40;
    } else if (product === 'snacks') {
        currentPrice = 2.00;
    }

    total = currentPrice * quantity;
    return total.toFixed(2)
}

console.log(solve('coke', 3))
