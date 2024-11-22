function solve(yield) {
    const drop = 10;
    const consume = 26;
    let dayCounter = 0;
    let storage = 0;

    while (yield >= 100) {
        storage += yield;
        dayCounter += 1

        if (storage >= consume) {
            storage -= consume;
        } else {
            storage = 0;
        }

        yield -= drop;
    }

    if (storage >= consume) {
        storage -= consume;
    } else {
        storage = 0;
    }

    console.log(dayCounter)
    console.log(storage)

}

solve(111)
console.log('-----------')
solve(450)
