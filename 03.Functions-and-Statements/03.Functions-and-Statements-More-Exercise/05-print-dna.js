function solve(num) {
    const couples = ['AT', 'CG', 'TT', 'AG', 'GG'];
    const patterns = [
        ['*','*','X','X','*','*'], ['*','X','-','-','X','*'], 
        ['X','-','-','-','-','X'], ['*','X','-','-','X','*']
    ];
    let coupleIndex = 0;
    let patternIndex = 0;


    for (let i = 0; i < num; i++) {
        if (coupleIndex === couples.length) {
            coupleIndex = 0;
        }
        
        if (patternIndex === patterns.length) {
            patternIndex = 0;
        }
        
        let currentCouple = couples[coupleIndex];
        let currentPattern = [...patterns[patternIndex]];

        for (symbol of currentPattern) {
                if (symbol === 'X') {
                let xIndex = currentPattern.indexOf('X');
                currentPattern[xIndex] = currentCouple[0];
                break;
            }
        }

        for (symbol of currentPattern) {
            if (symbol === 'X') {
                let xIndex = currentPattern.indexOf('X');
                currentPattern[xIndex] = currentCouple[1];
                break;
            }
        }

        console.log(currentPattern.join(''));
        coupleIndex++;
        patternIndex++;
    }
}

solve(10);

//sequence: 

// pattern: **AT**
//          *C--G*
//          T----T
//          *A--G*
//          **GG**
//          *A--T*
//          C----G
//          *T--T*
//          **AG**
//          *G--G*