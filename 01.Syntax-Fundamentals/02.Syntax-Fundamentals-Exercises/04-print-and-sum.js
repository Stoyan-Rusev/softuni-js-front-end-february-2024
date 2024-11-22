function solve(start, end) {
    let sequence = ''
    let total = 0

    for (let i = start; i <= end; i++) {
        total += i
        sequence += `${i} `
    }

    console.log(sequence.trim())
    console.log(`Sum: ${total}`)
}

solve(1, 4) 
