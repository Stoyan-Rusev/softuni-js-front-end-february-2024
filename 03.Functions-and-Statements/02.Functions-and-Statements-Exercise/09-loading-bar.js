function solve(percent) {
    let status = 'Still loading...'
    let loadingBar = ''
    for (i = 1; i <= 10; i++) {
        if (i <= percent / 10) {
            loadingBar += '%'
        } else {
            loadingBar += '.'
        }
    }

    if (percent === 100) {
        status = 'Complete!'
    }

    console.log(`${percent}% [${loadingBar}]`);
    console.log(status);
}

solve(50);
console.log('------------')
solve(100);