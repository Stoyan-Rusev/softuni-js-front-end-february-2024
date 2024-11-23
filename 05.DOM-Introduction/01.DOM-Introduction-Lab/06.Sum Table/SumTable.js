function sumTable() {
    let sum = 0;
    let elements = document.querySelectorAll('tr td:nth-child(2)');
    for (let i = 0; i < elements.length - 1; i++) {
        sum += Number(elements[i].textContent);
    }

    elements[elements.length-1].textContent = sum;
}