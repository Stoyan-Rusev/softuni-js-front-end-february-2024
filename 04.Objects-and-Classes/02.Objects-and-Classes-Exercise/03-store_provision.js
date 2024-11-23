function solve(currentStockArr, ordersArr) {
    let storage = {};

    for (let i = 0; i < currentStockArr.length-1; i+=2) {
        storage[currentStockArr[i]] = Number(currentStockArr[i+1])
    }

    for (let i = 0; i < ordersArr.length-1; i+=2) {
        const productName = ordersArr[i];
        const value = Number(ordersArr[i+1]);

        if (storage.hasOwnProperty(productName)) {
            storage[productName] += value;
        } else {
            storage[productName] = value;
        }
    }

    for (let key in storage) {
        console.log(`${key} -> ${storage[key]}`)
    }
}

solve(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);