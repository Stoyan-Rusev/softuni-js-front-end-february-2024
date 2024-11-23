function solve(strArr) {
    let parking = {};
    let parkingArr = [];

    for (let info of strArr) {
        const [command, plate] = info.split(', ')
        parking[plate] = command;
    }

    for (const car in parking) {
        if (parking[car] === 'IN') {
            parkingArr.push(car);
        }
    }

    if (parkingArr.length > 0) {
        parkingArr.sort()
        .forEach(carPlate => console.log(carPlate));
    } else {
        console.log('Parking Lot is Empty');
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

console.log('----------');

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);