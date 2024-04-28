window.addEventListener("load", solve);

function solve() {
    //get input elements
    const placeInputEl = document.getElementById('place');
    const actionInputEl = document.getElementById('action');
    const personInputEl = document.getElementById('person');

    //get task collection
    const taskCollectionEl = document.getElementById('task-list');
    
    //get collection with done tasks
    const doneTasksCollection = document.getElementById('done-list');
    
    //get buttons
    const addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', () => {
        const fragment = document.createDocumentFragment();

        const place = placeInputEl.value;
        const action = actionInputEl.value;
        const person = personInputEl.value;

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        
        const doneButton = document.createElement('button');
        doneButton.classList.add('done');
        doneButton.textContent = 'Done';

        const buttonsElements = document.createElement('div');
        buttonsElements.classList.add('buttons');
        buttonsElements.appendChild(editButton);
        buttonsElements.appendChild(doneButton);

        const placeElement = document.createElement('p');
        placeElement.textContent = `Place:${place}`;
        const actionElement = document.createElement('p');
        actionElement.textContent = `Action:${action}`;
        const personElement = document.createElement('p');
        personElement.textContent = `Person:${person}`;

        const article = document.createElement('article');
        article.appendChild(placeElement);
        article.appendChild(actionElement);
        article.appendChild(personElement);

        const liCleanTask = document.createElement('li');
        liCleanTask.classList.add('clean-task');

        liCleanTask.appendChild(article);
        liCleanTask.appendChild(buttonsElements);

        fragment.appendChild(liCleanTask);

        taskCollectionEl.appendChild(fragment);

        placeInputEl.value = '';
        actionInputEl.value = '';
        personInputEl.value = '';


        editButton.addEventListener('click', () => {
            placeInputEl.value = place;
            actionInputEl.value = action;
            personInputEl.value = person;

            liCleanTask.remove();
        });

        doneButton.addEventListener('click', () => {
            liCleanTask.remove();

            liCleanTask.removeChild(buttonsElements);
            liCleanTask.removeAttribute('class', 'clean-task');

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.textContent = 'Delete';
            
            liCleanTask.appendChild(deleteButton);

            doneTasksCollection.appendChild(liCleanTask);

            deleteButton.addEventListener('click', () => {
                liCleanTask.remove();
            })
        })
    })
}