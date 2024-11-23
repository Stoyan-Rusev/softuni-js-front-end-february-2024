function solve(dataArr) {
    let appointments = {};

    for (let info of dataArr) {
        const [day, name] = info.split(' ');
        if (appointments.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }

        appointments[day] = name;
        console.log(`Scheduled for ${day}`)
    }

    for (const appDay in appointments) {
        console.log(`${appDay} -> ${appointments[appDay]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])