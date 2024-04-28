// PLEASE REMOVE THE LAST CHARACTER OF THE URLLLLL -> / !!!!!!!

const baseURL = 'http://localhost:3030/jsonstore/tasks';

const loadButton = document.getElementById('load-meals');
const addButton = document.getElementById('add-meal');
const editButton = document.getElementById('edit-meal');
const mealsListElement = document.getElementById('list');

const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');

mealsListElement.innerHTML = '';

let currentMealId = null;

function loadRequest() {
    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            mealsListElement.innerHTML = '';
            const mealsFragment = document.createDocumentFragment();

            Object.values(data)
                .forEach(meal => {
                    const changeButton = document.createElement('button');
                    changeButton.classList.add('change-meal');
                    changeButton.textContent = 'Change';

                    const deleteButton = document.createElement('button');
                    deleteButton.classList.add('delete-meal');
                    deleteButton.textContent = 'Delete';

                    const mealButtons = document.createElement('div');
                    mealButtons.id = 'meal-buttons';
                    mealButtons.appendChild(changeButton);
                    mealButtons.appendChild(deleteButton);
  
                    const h2NameOfMeal = document.createElement('h2');
                    h2NameOfMeal.textContent = meal.food;
                    const h3TimeOfMeal = document.createElement('h3');
                    h3TimeOfMeal.textContent = meal.time;
                    const h3CaloriesOfMeal = document.createElement('h3');
                    h3CaloriesOfMeal.textContent = meal.calories;

                    const mealDivElement = document.createElement('div');
                    mealDivElement.classList.add('meal');
                    mealDivElement.appendChild(h2NameOfMeal);
                    mealDivElement.appendChild(h3TimeOfMeal);
                    mealDivElement.appendChild(h3CaloriesOfMeal);
                    mealDivElement.appendChild(mealButtons);

                    mealsListElement.appendChild(mealDivElement);

                    changeButton.addEventListener('click', () => {
                        currentMealId = meal._id;
                        mealDivElement.remove();

                        foodInputElement.value = meal.food;
                        timeInputElement.value = meal.time;
                        caloriesInputElement.value = meal.calories;

                        editButton.removeAttribute('disabled');
                        addButton.setAttribute('disabled', 'disabled');
                    });

                    deleteButton.addEventListener('click', () => {
                        fetch(`${baseURL}/${meal._id}`, {
                            method: 'DELETE',
                        })
                            .then(() => {
                                loadRequest();
                            });
                    })
                });
        })
}

function getInput() {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;

    return {food, time, calories};
}

function clearInput() {
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
}

loadButton.addEventListener('click', loadRequest);

addButton.addEventListener('click', () => {
    const {food, time, calories} = getInput();  
    fetch(baseURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            food,
            time,
            calories,
        }),
    })
        .then(() => {
            loadRequest();

            clearInput();
        })
});

editButton.addEventListener('click', () => {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;
    
    fetch(`${baseURL}/${currentMealId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            food,
            time,
            calories,
            _id: currentMealId,
        }),
    })
        .then(() => {
            loadRequest();
        })

        
    editButton.setAttribute('disabled', 'disabled');
    addButton.removeAttribute('disabled', 'disabled');

    clearInput();
})