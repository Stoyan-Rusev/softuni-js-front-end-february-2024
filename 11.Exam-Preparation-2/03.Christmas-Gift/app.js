const baseUrl = 'http://localhost:3030/jsonstore/gifts';
// Load Button and Giftlist div Element
const loadPresentsButtonElement = document.getElementById('load-presents');
const giftlistDivElement = document.getElementById('gift-list');
// Add and Edit Buttons
const addPresentButtonElement = document.getElementById('add-present');
const editPresentButtonElement = document.getElementById('edit-present');
// Input Fields
const presentInputField = document.getElementById('gift');
const forInputField = document.getElementById('for');
const priceInputField = document.getElementById('price');
// Chosen gift ID
let changeId = '';
let deleteId = '';

const getPresents = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    // cleaning giftlist content the content
    giftlistDivElement.innerHTML = '';

    for (const objectId in data) {
        const giftSockDivElement = document.createElement('div');
        giftSockDivElement.classList.add('gift-sock');

        // Making Content
        const presentContentDiv = document.createElement('div');
        presentContentDiv.classList.add('content')

        const presentPElement = document.createElement('p');
        presentPElement.textContent = data[objectId]['gift'];
        presentContentDiv.appendChild(presentPElement);

        const namePElement = document.createElement('p');
        namePElement.textContent = data[objectId]['for'];
        presentContentDiv.appendChild(namePElement);

        const pricePElement = document.createElement('p');
        pricePElement.textContent = data[objectId]['price'];
        presentContentDiv.appendChild(pricePElement);

        // Making and adding Butttons
        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons-container');

        const changeButtonElement = document.createElement('button');
        changeButtonElement.classList.add('change-btn');
        changeButtonElement.textContent = 'Change';

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-btn');
        deleteButtonElement.textContent = 'Delete';

        buttonsDivElement.appendChild(changeButtonElement);
        buttonsDivElement.appendChild(deleteButtonElement);

        // Final Appending 
        giftSockDivElement.appendChild(presentContentDiv);
        giftSockDivElement.appendChild(buttonsDivElement);
        giftlistDivElement.appendChild(giftSockDivElement);
        
        // Change Button functionality
        changeButtonElement.addEventListener('click', (e) => {
            giftSockDivElement.remove();

            presentInputField.value = data[objectId]['gift'];
            forInputField.value = data[objectId]['for'];
            priceInputField.value = data[objectId]['price'];

            addPresentButtonElement.setAttribute('disabled', 'disabled');
            editPresentButtonElement.removeAttribute('disabled');
            changeId = objectId;
        });
        
        // Delete Button functionality:
        deleteButtonElement.addEventListener('click', () => {
            deleteId = objectId

            fetch(`${baseUrl}/${deleteId}`, {
                method: 'DELETE',
            })
            .then(res => {
                if (!res.ok) {
                    return;
                }
            });
            // console.log(`${baseUrl}/${giftId}`);

            giftSockDivElement.remove();
        });        
    }
}

// GET presents from server:
loadPresentsButtonElement.addEventListener('click',  getPresents);

// POST present to server
addPresentButtonElement.addEventListener('click', async () => {
    if (presentInputField.value !== '' && forInputField.value !== '' && priceInputField.value !== '') {
        const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            "gift": presentInputField.value,
            "for": forInputField.value,
            "price": priceInputField.value,
        }),
    });

    presentInputField.value = '';
    forInputField.value = '';
    priceInputField.value = '';

    getPresents();
    }
});

// PUT present to server
editPresentButtonElement.addEventListener('click', () => {

    fetch(`${baseUrl}/${changeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "gift": presentInputField.value,
            "for": forInputField.value,
            "price": priceInputField.value,
        }),
    })
        .then(res => {
            if (!res.ok) {
                return;
            }
        });
    
    // console.log(`${baseUrl}/${giftId}`);

    presentInputField.value = '';
    forInputField.value = '';
    priceInputField.value = '';

    getPresents();

    editPresentButtonElement.setAttribute('disabled', 'disabled');
    addPresentButtonElement.removeAttribute('disabled');
});
