function focused() {
    const inputElements = document.querySelectorAll('input');

    for (const field of inputElements) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(e) {
        const currentDiv = e.currentTarget.parentNode;
        currentDiv.classList.add('focused');
    }

    function onBlur(e) {
        const currentDiv = e.currentTarget.parentNode;
        currentDiv.classList.remove('focused');
    }
}