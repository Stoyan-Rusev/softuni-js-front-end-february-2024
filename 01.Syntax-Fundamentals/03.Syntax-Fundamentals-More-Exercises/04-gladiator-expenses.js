function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalCost = 0;
    for(let i=1; i<=lostFights; i++) {
        if (i%12 === 0) {
            totalCost += (helmetPrice + swordPrice + shieldPrice + armorPrice)
        } else if (i%6 === 0) {
            totalCost += (helmetPrice + swordPrice + shieldPrice)
        } else if (i%3 === 0) {
            totalCost += (swordPrice)
        } else if (i%2 === 0) {
            totalCost += (helmetPrice)
        }
    }
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`)
}

solve(7,2,3,4,5)
solve(23,
    12.50,
    21.50,
    40,
    200)