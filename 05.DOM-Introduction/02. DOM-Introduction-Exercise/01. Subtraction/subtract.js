function subtract() {
    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondtNum = Number(document.getElementById('secondNumber').value);
    const resultNum = firstNum - secondtNum;

    const resultElement = document.getElementById('result');
    resultElement.textContent = resultNum;

}