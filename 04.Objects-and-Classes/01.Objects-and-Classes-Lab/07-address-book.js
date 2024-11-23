function solve(strArr) {
    const addressBook = {};

    for (info of strArr) {
        const [name, address] = info.split(':');
        addressBook[name] = address;
    }

    Object
        .entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([currentName, currentAddress]) => console.log(`${currentName} -> ${currentAddress}`))
}

solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);