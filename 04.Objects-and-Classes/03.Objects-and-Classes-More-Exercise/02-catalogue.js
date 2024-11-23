function solve(arr) {
    let sortedArr = arr.sort();
    let sortedDict = {};
    let lastLetter = ''
    
    for (let item of sortedArr) {
        const [product, quantity] = item.split(' : ');
        sortedDict[product] = quantity;
    }

    for (const productName in sortedDict) {
        const currentLetter = productName[0]
        if (lastLetter !== currentLetter) {
            console.log(currentLetter);
            lastLetter = currentLetter;
        }

        console.log(`  ${productName}: ${sortedDict[productName]}`);
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);
console.log('-------------');
solve([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]);