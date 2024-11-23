function solve(commandArr){
    let cleanValue = 0;
    for (command of commandArr) {
        if (command === 'soap') {
            cleanValue += 10;
        } else if (command === 'water') {
            cleanValue += 0.2 * cleanValue;
        } else if (command === 'vacuum cleaner') {
            cleanValue += 0.25 * cleanValue;
        } else if (command === 'mud') {
            cleanValue *= 0.9;
        }
    }

    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);