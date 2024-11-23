function solve(data) {
    for (let row of data) {
        let [town, latitude, longitude] = row.split(' | ')
        const city = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }

        console.log(city);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);