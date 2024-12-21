function solve(inputArr) {
    let decodedMessage = inputArr.shift();
    // console.log(decodedMessage);

    while (true) {
        let currentData = inputArr.shift();
        if (currentData === 'Buy') {
            break;
        }

        currentData = currentData.split('?');
        const command = currentData[0];

        if (command === 'TakeEven') {
            decodedMessage = decodedMessage
                .split('')
                .filter((ch, index) => index % 2 === 0)
                .join('');
            console.log(decodedMessage);
        } else if (command === 'ChangeAll') {
            const substring = currentData[1];
            const replacementString = currentData[2];
            decodedMessage = decodedMessage.replace(new RegExp(substring, 'g'), replacementString);
            console.log(decodedMessage);
        } else if (command === 'Reverse') {
            let substring = currentData[1];
            if (decodedMessage.includes(substring)) {
                decodedMessage = decodedMessage.replace(substring, '');
                substring = substring
                    .split('')
                    .reverse()
                    .join('');
                decodedMessage += substring;
                console.log(decodedMessage);
            } else {
                console.log('error')
            }
        }
    }
    console.log(`The cryptocurrency is: ${decodedMessage}`)
}

solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"]));