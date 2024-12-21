window.addEventListener("load", solve);

function solve() {
    // Input Form
    const addPlaceInputElement = document.getElementById('place');
    const addActionInputElement = document.getElementById('action');
    const addPersonInputElement = document.getElementById('person');
    const addButtonElement = document.getElementById('add-btn');

    const ulTaskList = document.getElementById('task-list')

    // making addButtonElement functionality:
    addButtonElement.addEventListener('click', () => {
        const place = addPlaceInputElement.value;
        const action = addActionInputElement.value;
        const person = addPersonInputElement.value;

        if (!place || !action || !person) {
            console.log('no info');
            return;
        }

        // creating Li Element
        const liTaskElement = document.createElement('li');
        liTaskElement.classList.add('clean-task');

        // creating article with p elements inside
        const articleElement = document.createElement('article');

        const placePElement = document.createElement('p');
        placePElement.textContent = `Place:${place}`;
        articleElement.appendChild(placePElement);

        const actionPElement = document.createElement('p');
        actionPElement.textContent = `Action:${action}`;
        articleElement.appendChild(actionPElement);

        const personPElement = document.createElement('p');
        personPElement.textContent = `Person:${person}`;
        articleElement.appendChild(personPElement);

        // creating Div with Edit and Done buttons 
        const divElement = document.createElement('div');
        divElement.classList.add('buttons');
        
        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit');
        editButtonElement.textContent = 'Edit';
        divElement.appendChild(editButtonElement);

        const doneButtonElement = document.createElement('button');
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent = 'Done';
        divElement.appendChild(doneButtonElement);

        // apprending Article and Div in the Li
        liTaskElement.appendChild(articleElement);
        liTaskElement.appendChild(divElement);
        ulTaskList.appendChild(liTaskElement);

        // Reset Inputs:
        addPlaceInputElement.value = '';
        addActionInputElement.value = '';
        addPersonInputElement.value = '';


        // Edit button functionality:
        editButtonElement.addEventListener('click', () => {
            addPlaceInputElement.value = place;
            addActionInputElement.value = action;
            addPersonInputElement.value = person;

            liTaskElement.remove();
        });

        // Done button functionality:
        doneButtonElement.addEventListener('click', ()=> {
            const doneUlElement = document.getElementById('done-list');

            liTaskElement.removeChild(divElement);
            doneUlElement.appendChild(liTaskElement);

            // Delete button
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('detlete');
            deleteButton.textContent = 'Delete';
            liTaskElement.appendChild(deleteButton)

            deleteButton.addEventListener('click', () => {
                liTaskElement.remove();
            })
        })
    });
}