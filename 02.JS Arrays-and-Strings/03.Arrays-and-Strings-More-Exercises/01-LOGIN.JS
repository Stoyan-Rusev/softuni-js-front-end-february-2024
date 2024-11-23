function solve(strArr) {
    const username = strArr.shift();
    const reversedUsername = username.split('').reverse().join('');
    let tryCounter = 0;

    for (let password of strArr) {
        if (password === reversedUsername) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            tryCounter++;
        }

        if (tryCounter < 4) {
            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${username} blocked!`);
            break;
        }
    }
}

solve(['Acer','login','go','let me in','recA'])
solve(['momo','omom'])
solve(['sunny','rainy','cloudy','sunny','not sunny'])