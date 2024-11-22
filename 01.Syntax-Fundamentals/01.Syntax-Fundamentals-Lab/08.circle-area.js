function area(input) {
    let inputType = typeof(input)
    let result

    if (inputType != 'number') {
        result = `We can not calculate the circle area, because we receive a ${inputType}.`
    } else {
        result = (Math.pow(input, 2) * Math.PI).toFixed(2)
    }

    console.log(result)
} 

area('4')