function solve(data) {
    let employees = [];
    for (let current of data) {
        let employee = {
            name: current,
            pNumber: current.length,
        }
        employees.push(employee)
    }

    for (let employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.pNumber}`)
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);