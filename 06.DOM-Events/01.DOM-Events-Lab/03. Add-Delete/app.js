function addItem() {
    function deleteItem(e) {
        const row = e.currentTarget.parentNode;
        row.remove();
    }
    
    const inputElement = document.getElementById('newItemText');

    const ulElement = document.getElementById('items');
    const newLiElement =document.createElement('li');
    newLiElement.textContent = inputElement.value;

    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]'
    deleteLink.addEventListener('click', deleteItem);
    console.log(deleteLink);

    newLiElement.appendChild(deleteLink);
    ulElement.appendChild(newLiElement);
    inputElement.value = '';
}