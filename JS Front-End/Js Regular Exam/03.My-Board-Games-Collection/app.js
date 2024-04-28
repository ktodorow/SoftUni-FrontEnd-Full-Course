const baseUrl = 'http://localhost:3030/jsonstore/games';

//input elements
const nameInputEl = document.getElementById('g-name');
const typeInputEl = document.getElementById('type');
const playersInputEl = document.getElementById('players');

//buttonElements
const addButton = document.getElementById('add-game');
const editButton = document.getElementById('edit-game');
const loadButton = document.getElementById('load-games');

const gameList = document.getElementById('games-list');
gameList.innerHTML = '';

let gameId = null;

function loadRequest() {
    gameList.innerHTML = '';

    fetch(baseUrl)
        .then(res => res.json())
        .then(games => {
            Object.values(games)
                .forEach(game => {
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

                    const gameElement = document.createElement('p');
                    gameElement.textContent = game.name;
                    const typeElement = document.createElement('p');
                    typeElement.textContent = game.type;
                    const maxPlayersElement = document.createElement('p');
                    maxPlayersElement.textContent = game.players;
    
                    const contentElement = document.createElement('div');
                    contentElement.classList.add('content');
                    contentElement.appendChild(gameElement);
                    contentElement.appendChild(typeElement);
                    contentElement.appendChild(maxPlayersElement);
                    
                    const boardGameCollection = document.createElement('div');
                    boardGameCollection.classList.add('board-game');
                    boardGameCollection.appendChild(contentElement);
                    boardGameCollection.appendChild(buttonsContainer);
    
                    gameList.appendChild(boardGameCollection);

                    changeButton.addEventListener('click', () => {
                        gameId = game._id;

                        boardGameCollection.remove();
                        
                        nameInputEl.value = game.name;
                        typeInputEl.value = game.type;
                        playersInputEl.value = game.players;

                        editButton.removeAttribute('disabled');
                        addButton.setAttribute('disabled', true);
                    })

                    deleteButton.addEventListener('click', () => {
                        fetch(`${baseUrl}/${game._id}`, { 
                            method: 'DELETE',
                        })
                            .then(()=> loadRequest());
                    })
                });
        }) 
}

function getInput() {
    const name = nameInputEl.value;
    const type = typeInputEl.value;
    const players = playersInputEl.value;
    return {name, type, players}; 
}

function clearInput() {
    nameInputEl.value = '';
    typeInputEl.value = '';
    playersInputEl.value = '';
}

loadButton.addEventListener('click', () => loadRequest());
addButton.addEventListener('click', () => {
    const {name, type, players} = getInput();

    if(name != '' && type != '' && players != '') {
        fetch(baseUrl, {
            method: 'POST',
            header: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name,
                type,
                players,
            })
        })
            .then(() => loadRequest());
    }

    clearInput();
});
editButton.addEventListener('click',() => {
    const {name, type, players} = getInput();

    if(name != '' && type != '' && players != '') {
        fetch(`${baseUrl}/${gameId}`, {
            method: 'PUT',
            header: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name,
                type,
                players,
                _id: gameId,
            })
        })
            .then(() => loadRequest());
    }

    editButton.setAttribute('disabled', true);
    addButton.removeAttribute('disabled', true);

    clearInput();
});