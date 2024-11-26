function attachEventsListeners() {
    const mapper = {
        "days": 24 * 60 * 60,
        "hours": 60 * 60,
        "minutes": 60,
        "seconds": 1,
    }

    const buttonElements = document.querySelectorAll('input[type="button"]');
    const inputElements = document.querySelectorAll('input[type="text"]');

    for (const button of buttonElements) {
        button.addEventListener('click', (e) => {
            const currentInputElement = button.previousElementSibling;
            targetValue = Number(currentInputElement.value);
            const targetValueInSeconds = targetValue * mapper[currentInputElement.id];
            
            for (const inputElement of inputElements) {
                inputElement.value = targetValueInSeconds / mapper[inputElement.id];
            }
        });
    }
}