function solve(shiiftsArr) {
    const bitcoinPrice = 11949.16; //lv
    const goldPriceGr = 67.51; //lv

    let money = 0;
    let bitcoins = 0;
    let current_day = 0;
    let firstBitcoinDay = '';

    for (i = 0; i < shiiftsArr.length; i++) {
        current_day++;        
        if (current_day % 3 === 0) {
            shiiftsArr[i] *= 0.7;
        }
        money += shiiftsArr[i] * goldPriceGr;

        while (money >= bitcoinPrice) {
            money -= bitcoinPrice;
            bitcoins += 1;
            if (firstBitcoinDay === '') {
                firstBitcoinDay = current_day;
            }
        }

    }

    console.log(`Bought bitcoins: ${bitcoins}`)
    if (firstBitcoinDay !== '') {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

solve([100, 200, 300]);
console.log('--------')
solve([50, 100]);
console.log('--------')
solve([3124.15, 504.212, 2511.124]);