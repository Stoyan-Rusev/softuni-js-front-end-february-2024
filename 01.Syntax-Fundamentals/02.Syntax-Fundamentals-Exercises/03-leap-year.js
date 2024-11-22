function solve(year) {
    let isLeap = 'no'

    if (year % 400 === 0) {
        isLeap = 'yes'
    } else if (year % 4 === 0 & year % 100 !== 0) {
        isLeap = 'yes'
    }

    console.log(isLeap)
}

solve(400)
solve(800)

solve(100)
solve(200)