function solve(age) {
    let currentPhase

    if (age >=66)  {
        currentPhase = 'elder';
    } else if (age>=20) {
        currentPhase = 'adult';
    } else if (age>=14) {
        currentPhase = 'teenager';
    } else if (age>=3) {
        currentPhase = 'child';
    } else if (age>=0) {
        currentPhase = 'baby';
    } else {
        currentPhase = "out of bounds";
    }

    console.log(currentPhase)
}