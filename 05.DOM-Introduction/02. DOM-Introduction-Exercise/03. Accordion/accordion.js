function toggle() {
    const buttonElement = document.querySelector('.button');
    let buttonText = buttonElement.textContent;

    const extraElement = document.getElementById('extra');

    if (buttonText === 'More') {
        extraElement.style.display = 'block'
        buttonElement.textContent = 'Less';
    } else if (buttonText === 'Less') {
        extraElement.style.display = 'none'
        buttonElement.textContent = 'More';
    }
}
