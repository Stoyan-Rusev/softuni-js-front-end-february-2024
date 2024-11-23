function solve(strArr) {
    let phoneBook = {};
    for (const row of strArr) {
        const [currentName, number] = row.split(' ');
        phoneBook[currentName] = number;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);