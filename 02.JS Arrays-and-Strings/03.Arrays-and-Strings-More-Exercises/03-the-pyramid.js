function solve(baseSize, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let floors = 1;

    for (i = baseSize; i > 0; i -=2 ) {
        if (i === 2) {
            totalGold += 4 * increment 
            break
        } else if (i === 1) {
            totalGold += 1 * increment 
            break
        }

        let outerLayer = (2 * i) + (2 * i - 4);
        let innerLayer = i**2 - outerLayer;
        if (floors % 5 === 0) {
            totalLapis += outerLayer * increment;
        } else {
            totalMarble += outerLayer * increment;
        }
        totalStone += innerLayer * increment ;
        floors += 1
    }
    
    console.log(`Stone required: ${Math.ceil(totalStone)}`)
    console.log(`Marble required: ${Math.ceil(totalMarble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`)
    console.log(`Gold required: ${Math.ceil(totalGold)}`)
    console.log(`Final pyramid height: ${Math.floor(floors * increment)}`)
}

solve(11, 1);
console.log('-------------------')
solve(11, 0.75);
console.log('-------------------')
solve(12, 1);
console.log('-------------------')
solve(23, 0.5)
