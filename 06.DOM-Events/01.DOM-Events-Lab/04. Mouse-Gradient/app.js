function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient-box');
    gradientElement.addEventListener('mousemove', gradientMove)
    gradientElement.addEventListener('mouseout', gradientOut);

    const resultElement = document.getElementById('result');

    function gradientMove(e) {
        // Calculate the relative position of the mouse cursor within the 'gradient' element 
        // by dividing the horizontal offset of the cursor by the total width
        let power = e.offsetX / (e.target.clientWidth - 1);
        // Convert the relative position to a percentage by multiplying it with 100
        power = Math.trunc(power * 100);
        resultElement.textContent = power + "%";
    }

    function gradientOut(e) {
        resultElement.textContent = '';
    }
}