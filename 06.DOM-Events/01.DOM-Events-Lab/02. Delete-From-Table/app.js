function deleteByEmail() {
    const tableRowsElements = document.querySelectorAll('tbody tr');
    const inputElement = document.querySelector('label input');
    const resultElement = document.getElementById('result');

    for (let row of tableRowsElements) {
        if (row.children[1].textContent == inputElement.value) {
            row.remove();
            resultElement.textContent = 'Deleted';
        } else {
            resultElement.textContent = 'Not found.';
        }
    }
}