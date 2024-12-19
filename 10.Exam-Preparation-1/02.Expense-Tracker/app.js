window.addEventListener("load", solve);

function solve() {
    // Input Fields Elements and Add button:
    const expenseTypeInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const addButton = document.getElementById('add-btn');

    const previewUlElement = document.getElementById('preview-list');
    const expensesUlElement = document.getElementById('expenses-list');
    const deleteButton = document.querySelector('.delete');

    addButton.addEventListener('click', () => {
        const expenseType = expenseTypeInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        if (expenseType !== '' && amount !== '' && date !== '' && previewUlElement.innerHTML === '') {
            console.log(expenseType, amount, date);
            const LiElement = document.createElement('li');
            LiElement.className = 'expense-item';

            // creating previewUlElement content
            const articleElement = document.createElement('article');

            const p1Element = document.createElement('p');
            p1Element.textContent = `Type: ${expenseType}`;
            articleElement.appendChild(p1Element);

            const p2Element = document.createElement('p');
            p2Element.textContent = `Amount: ${amount}$`;
            articleElement.appendChild(p2Element);

            const p3Element = document.createElement('p');
            p3Element.textContent = `Date: ${date}`;
            articleElement.appendChild(p3Element);

            LiElement.appendChild(articleElement);
            previewUlElement.appendChild(LiElement);

            // creating edit and ok buttons
            const buttonsFieldElement = document.createElement('div');

            const editButtonElement = document.createElement('button');
            editButtonElement.textContent = 'edit';
            editButtonElement.classList.add('btn');
            editButtonElement.classList.add('edit');

            const okButtonElement = document.createElement('button');
            okButtonElement.textContent = 'ok';
            okButtonElement.classList.add('btn');
            okButtonElement.classList.add('ok');

            buttonsFieldElement.appendChild(editButtonElement);
            buttonsFieldElement.appendChild(okButtonElement);
            LiElement.appendChild(buttonsFieldElement);

            // Making edit button functionallity:
            editButtonElement.addEventListener('click', () => {
                addButton.disabled = false;
                expenseTypeInputElement.value = expenseType;
                amountInputElement.value = amount;
                dateInputElement.value = date;
                previewUlElement.remove();
            });

            // Making ok button functionallity:
            okButtonElement.addEventListener('click', () => {
                addButton.disabled = false;
                expensesUlElement.appendChild(LiElement);
                LiElement.removeChild(buttonsFieldElement);
            });

            // Making delete button functionallity:
            deleteButton.addEventListener('click', () => {
                expensesUlElement.innerHTML = '';
            });
        
        
        // Reset input fields and button disabled
        addButton.disabled = true;
        expenseTypeInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';
        }   
    });
}