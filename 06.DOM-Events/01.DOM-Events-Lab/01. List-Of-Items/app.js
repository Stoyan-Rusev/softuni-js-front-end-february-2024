function addItem() {
    const ulElement = document.getElementById('items');
    const newLiElement =document.createElement('li');
    const newTextElement = document.getElementById('newItemText');
    const newText = document.getElementById('newItemText').value;

    newLiElement.textContent = newText;
    ulElement.appendChild(newLiElement);
    newTextElement.value = '';
}