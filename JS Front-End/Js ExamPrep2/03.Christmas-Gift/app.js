//LOOK FOR:
//You should also clear all the input fields after the creation!
//After a successful creation, you should send another GET request to fetch all the gift records,including the newly added one!
//Clicking the [Change] button on a present should remove the present from the DOM structure!
//The [Edit Present] button in the form should be activated and the [Add Present] one should be deactivated.
//After the successful request, you should fetch the items again and ->see that the changes have been made<-!!

//1. get url
const baseUrl = 'http://localhost:3030/jsonstore/gifts';
//2. get important elements !

//input elements
const presentInputEl = document.getElementById('gift');
const forInputEl = document.getElementById('for');
const priceInputEl = document.getElementById('price');

//buttonElements
const addButton = document.getElementById('add-present');
const loadButton = document.getElementById('load-presents');
const editButton = document.getElementById('edit-present');

//present colleciton
const presentCollectionEl = document.getElementById('gift-list');
presentCollectionEl.innerHTML = '';

let currentId = null;

function loadRequest() {
    fetch(baseUrl)
    .then(res => res.json())
    .then(presents => {
        presentCollectionEl.innerHTML = '';
        
        Object.values(presents)
            .forEach(present => {
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-btn');
                deleteButton.textContent = 'Delete';

                const changeButton = document.createElement('button');
                changeButton.classList.add('change-btn');
                changeButton.textContent = 'Change';

                const buttonsContainer = document.createElement('div');
                buttonsContainer.classList.add('buttons-container');
                buttonsContainer.appendChild(deleteButton);
                buttonsContainer.appendChild(changeButton);
                //  "gift": "PS 5",
                //  "for": "Martin",
                //  "price": "599",
                const paragraphPresentEl = document.createElement('p');
                paragraphPresentEl.textContent = present.gift;
                const paragraphForEl = document.createElement('p');
                paragraphForEl.textContent = present.for;
                const paragraphPriceEl = document.createElement('p');
                paragraphPriceEl.textContent = present.price;

                const contentElement = document.createElement('div');
                contentElement.classList.add('content');
                contentElement.appendChild(paragraphPresentEl);
                contentElement.appendChild(paragraphForEl);
                contentElement.appendChild(paragraphPriceEl);
                
                const giftSockElement = document.createElement('div');
                giftSockElement.classList.add('gift-sock');
                giftSockElement.appendChild(contentElement);
                giftSockElement.appendChild(buttonsContainer);

                presentCollectionEl.appendChild(giftSockElement);

                changeButton.addEventListener('click', () => {
                    currentId = present._id;

                    giftSockElement.remove();

                    presentInputEl.value = present.gift;
                    forInputEl.value = present.for;
                    priceInputEl.value = present.price;

                    editButton.removeAttribute('disabled');
                    addButton.setAttribute('disabled', 'disabled');
                })

                deleteButton.addEventListener('click', () => {
                    fetch(`${baseUrl}/${present._id}`, {
                        method: 'DELETE'
                    })
                        .then(() => {
                            loadRequest();
                        });
                });
            })
    })   
}

//load presents from server
loadButton.addEventListener('click', () => {
    loadRequest();
});

addButton.addEventListener('click', () => {
    const gift = presentInputEl.value;
    const forInput = forInputEl.value;
    const price = priceInputEl.value;

    if(gift != '' && forInput != '' &&
    price != '') {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                gift: gift,
                'for': forInput,
                price: price,
            }),
        })
            .then(() => {
                loadRequest();

                presentInputEl.value = '';
                forInputEl.value = '';
                priceInputEl.value = '';
        })
    }
});

editButton.addEventListener('click', () => {
    const gift = presentInputEl.value;
    const forInput = forInputEl.value;
    const price = priceInputEl.value;

    fetch(`${baseUrl}/${currentId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            gift: gift,
            'for': forInput,
            price: price,
            _id: currentId,
        }),
    })
        .then(() => {
            loadRequest();
        })
    
    editButton.setAttribute('disabled', 'disabled');
    addButton.removeAttribute('disabled', 'disabled');

    presentInputEl.value = '';
    forInputEl.value = '';
    priceInputEl.value = '';
})