function solve(inputList) {
    const baristasAmount = Number(inputList.shift());
    let crew = {};

    // Making the Crew
    for (let i = 0; i < baristasAmount; i++) {
        const data = inputList.shift()
        let [name, shift, drinks] = data.split(' ');
        crew[name] = {
            shift,
            drinks: drinks.split(','),
        }
    }

    for (let commandData of inputList) {
        if (commandData === 'Closed') {
            break;
        }

        commandData = commandData.split(' / ');
        const command = commandData[0];
        const barista = commandData[1];

        // Checking Commands
        if (command === 'Prepare') {
            const baristaShift = commandData[2];
            const drink = commandData[3];

            if ((crew[barista]['shift'] === baristaShift) && (crew[barista]['drinks'].includes(drink))) {
                console.log(`${barista} has prepared a ${drink} for you!`);
            } else {
                console.log(`${barista} is not available to prepare a ${drink}.`)
            }

        } else if (command === 'Change Shift') {
            const newShift = commandData[2];
            crew[barista]['shift'] = newShift;
            console.log(`${barista} has updated his shift to: ${newShift}`);

        } else if (command === 'Learn') {
            const newCoffeeType = commandData[2];

            if (crew[barista]['drinks'].includes(newCoffeeType)) {
                console.log(`${barista} knows how to make ${newCoffeeType}.`)
            } else {
                crew[barista]['drinks'].push(newCoffeeType);
                console.log(`${barista} has learned a new coffee type: ${newCoffeeType}.`);
            }
        }
    }

    for (const baristaName in crew) {
        console.log(`Barista: ${baristaName}, Shift: ${crew[baristaName]['shift']}, Drinks: ${crew[baristaName]['drinks'].join(', ')}`);
    }
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',

      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
);

console.log('================================')

solve([
    '4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed'
]);