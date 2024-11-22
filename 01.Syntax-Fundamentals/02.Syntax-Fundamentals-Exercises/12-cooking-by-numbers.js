function solve(num, o1, o2, o3, o4, o5) {
    // let codeName = `${o1[0]}${o2[0]}${o3[0]}${o4[0]}${o5[0]}`
    let codeName = o1[0]+o2[0]+o3[0]+o4[0]+o5[0]

    for (let i=0; i<5; i++) {
        if (codeName[i] === 'c') {
            num /= 2;
            console.log(num)
        } else if (codeName[i] === 'd') {
            num = Math.sqrt(num);
            console.log(num)
        } else if (codeName[i] === 's') {
            num += 1;
            console.log(num)
        } else if (codeName[i] === 'b') {
            num *= 3;
            console.log(num)
        } else if (codeName[i] === 'f') {
            num *= 0.8
            console.log(num.toFixed(1)) 
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log('--------------------------------')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
