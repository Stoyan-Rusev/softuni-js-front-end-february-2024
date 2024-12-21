window.addEventListener("load", solve);

function solve() {
  // Input Fields Add button:
  const nameInputField = document.getElementById('name');
  const phoneInputField = document.getElementById('phone');
  const categoryInputField = document.getElementById('category');
  const addButtonElement = document.getElementById('add-btn');

  const ulChecklistElement = document.getElementById('check-list');
  const ulContactsElement = document.getElementById('contact-list');

  // Add button functionality
  addButtonElement.addEventListener('click', () => {
    // ulChecklistElement.innerHTML = '';

    const name = nameInputField.value;
    const phone = phoneInputField.value;
    const category = categoryInputField.value;

    if (!name || !phone || !category) {
      return;
    }
    // Making Content
    const liElement = document.createElement('li');
    const articleElement = document.createElement('article');

    const namePElement = document.createElement('p');
    namePElement.textContent = `name:${name}`;
    articleElement.appendChild(namePElement);

    const phonePElement = document.createElement('p');
    phonePElement.textContent = `phone:${phone}`;
    articleElement.appendChild(phonePElement);
      
    const categoryPElement = document.createElement('p');
    categoryPElement.textContent = `category:${category}`;
    articleElement.appendChild(categoryPElement);
    liElement.appendChild(articleElement);
    
     // Making Edit Save Buttons
    const divElementEditSaveButtons = document.createElement('div');
    divElementEditSaveButtons.classList.add('buttons');

    const editBtnElement = document.createElement('button');
    editBtnElement.classList.add('edit-btn');
    divElementEditSaveButtons.appendChild(editBtnElement);

    const saveBtnElement = document.createElement('button');
    saveBtnElement.classList.add('save-btn');
    divElementEditSaveButtons.appendChild(saveBtnElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(divElementEditSaveButtons);
    ulChecklistElement.appendChild(liElement);
    // ==========================================

    // Edit Btn functionality
    editBtnElement.addEventListener('click', () => {
      liElement.remove()
      nameInputField.value = name; 
      phoneInputField.value = phone;
      categoryInputField.value = category;
    });

    // Save Btn functionality
    saveBtnElement.addEventListener('click', () => {
      divElementEditSaveButtons.remove();
      ulContactsElement.appendChild(liElement);

      const deleteButtonElement = document.createElement('button');
      deleteButtonElement.classList.add('del-btn');
      liElement.appendChild(deleteButtonElement);

      // Delete Button functionality:
      deleteButtonElement.addEventListener('click', () => {
        liElement.remove();
      })
    })

    resetInputs()
  });

  function resetInputs() {
    nameInputField.value = ''; 
    phoneInputField.value = '';
    categoryInputField.value = '';
  }
}