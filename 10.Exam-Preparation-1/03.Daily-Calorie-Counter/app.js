const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadButtonElement = document.getElementById('load-meals');
const mealListElement = document.getElementById('list');

// meal inputElements
const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');

const addMealButton = document.getElementById('add-meal');
const editMealButton = document.getElementById('edit-meal');
const formElement = document.getElementById('form');

let idOfElementChangeButtonPressed = ''

const getMeals = async () => {
    mealListElement.innerHTML = '';

    // fetch all meals
    const response = await fetch(baseUrl);
    const meal = await response.json();
    
    // add meals to mealListElement
    for (const meal of Object.values(meal)) {
        // creating meal elements
        const mealElement = document.createElement('div');
        mealElement.className = 'meal'

        // create and add meal details elements
        const nameElement = document.createElement('h2');
        nameElement.textContent = meal.food;
        mealElement.appendChild(nameElement);

        const timeElement = document.createElement('h3');
        timeElement.textContent = meal.time;
        mealElement.appendChild(timeElement);

        const caloriesElement = document.createElement('h3');
        caloriesElement.textContent = meal.calories;
        mealElement.appendChild(caloriesElement);

        // create meal element buttons elements
        const buttonsContainerElement = document.createElement('div');
        buttonsContainerElement.id = 'meal-buttons';

        //create meal option buttons
        const changeMealButton = document.createElement('button');
        changeMealButton.className = 'change-meal';
        changeMealButton.textContent = 'Change';
        buttonsContainerElement.appendChild(changeMealButton);

        const deleteMealButton = document.createElement('button');
        deleteMealButton.className = 'delete-meal';
        deleteMealButton.textContent = 'Delete';
        buttonsContainerElement.appendChild(deleteMealButton);

        // appending to DOM
        mealElement.appendChild(buttonsContainerElement);
        mealListElement.appendChild(mealElement);

        // making Change meal button's functionality
        changeMealButton.addEventListener('click', () => {
            mealElement.remove();

            formElement.setAttribute('data-id', meal._id);
            idOfElementChangeButtonPressed = currentId;

            foodInputElement.value = meal.food;
            timeInputElement.value = meal.time;
            caloriesInputElement.value= meal.calories;

            editMealButton.disabled = false;
            addMealButton.disabled = true;
        });

        // making Delete meal button's functionality
        deleteMealButton.addEventListener('click', async () => {
            await fetch(`${baseUrl}/${meal._id}`, {
                method: 'DELETE',
            });

            mealElement.remove();
        });
    }
};

loadButtonElement.addEventListener('click', getMeals);

addMealButton.addEventListener('click', async () => {
    // create post request
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            "food": foodInputElement.value,
            "calories": caloriesInputElement.value,
            "time": timeInputElement.value,
        }),
    });

    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';

    if (!response.ok) {
        return; 
    }

    await getMeals();
});

editMealButton.addEventListener('click', async () => {
    const mealId = formElement.getAttribute('data-id');

    await fetch(`${baseUrl}/${meal._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            _id: mealId,
            "food": foodInputElement.value,
            "calories": caloriesInputElement.value,
            "time": timeInputElement.value,
        }),
    });

    formElement.removeAttribute('data-id');

    // console.log(`${baseUrl}/${idOfElementChangeButtonPressed}`)

    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';

    editMealButton.disabled = true;
    addMealButton.disabled = false;
    
    getMeals();
});
