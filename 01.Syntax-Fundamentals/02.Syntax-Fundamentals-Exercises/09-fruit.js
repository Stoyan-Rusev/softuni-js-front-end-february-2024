function solve(fruit, weightGr, priceKg) {
    let weightKg = weightGr / 1000
    let total = priceKg * weightKg

    console.log(`I need $${total.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)
}