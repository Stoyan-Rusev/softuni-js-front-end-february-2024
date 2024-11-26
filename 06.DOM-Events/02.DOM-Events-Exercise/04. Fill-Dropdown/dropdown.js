function addItem() {
    const textElement = document.getElementById('newItemText');
    const valueElement = document.getElementById('newItemValue');
    const dropDownMenu = document.getElementById('menu');
    
    const newOption = document.createElement('option');
    newOption.textContent = textElement.value;
    newOption.value = valueElement.value;

    dropDownMenu.appendChild(newOption);
    textElement.value = '';
    valueElement.value = '';
}