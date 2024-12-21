const baseUrl = 'http://localhost:3030/jsonstore/games';
 
const loadGamesButton = document.getElementById('load-games');
const addGameButton = document.getElementById('add-game');
const editGameButton = document.getElementById('edit-game');
const gamesListElement = document.getElementById('games-list');
const gameNameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const maxPlayersInputElement = document.getElementById('players');
const formContainerElement = document.getElementById('form');
 
loadGamesButton.addEventListener('click', loadGames);
 
addGameButton.addEventListener('click', addGame);
 
editGameButton.addEventListener('click', editGame);
 
gamesListElement.addEventListener('click', deleteGame);
 
async function loadGames() {
    const response = await fetch(baseUrl);
    const gameResult = await response.json();
 
    gamesListElement.innerHTML = '';
 
    const gamesListFragment = document.createDocumentFragment();
 
    Object
        .values(gameResult)
        .forEach(game => {
            gamesListFragment.appendChild(createGameElement(game));
        })
 
    gamesListElement.appendChild(gamesListFragment);
};
 
function addGame() {
    const game = getInputData();
 
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(game)
    })
        .then(response => {
            if (!response.ok) {
                return;
            }
 
            clearInputFields();
 
            return loadGames();
        });
}
 
function editGame() {
    const game = getInputData();
 
    const gameId = formContainerElement.getAttribute('data-id');
 
    formContainerElement.removeAttribute('data-id');
 
    fetch(`${baseUrl}/${gameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: gameId, ...game }),
    })
        .then(response => {
            if (!response.ok) {
                return;
            }
 
        loadGames();
 
        editGameButton.setAttribute('disabled', 'disabled');
 
        addGameButton.removeAttribute('disabled');
 
        clearInputFields();
        });
};
 
function deleteGame(e) {
    if (e.target.tagName !== 'BUTTON' || !e.target.classList.contains('delete-btn'))  {
        return;
    }
 
    const gameElement = e.target.parentElement.parentElement;
 
    const gameId = gameElement.getAttribute('data-id');
 
    fetch(`${baseUrl}/${gameId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                return;
            }
 
            gameElement.remove();
        });
};
 
function createGameElement(game) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', (e) => changeGame(e, game));
 
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';
 
    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);
 
    const namePElement = document.createElement('p');
    namePElement.textContent = game.name;
 
    const maxPlayersPElement = document.createElement('p');
    maxPlayersPElement.textContent = game.players;
 
    const typePElement = document.createElement('p');
    typePElement.textContent = game.type;
 
    const contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');
    contentDivElement.appendChild(namePElement);
    contentDivElement.appendChild(maxPlayersPElement);
    contentDivElement.appendChild(typePElement);
 
    const boardGameDivElement = document.createElement('div');
    boardGameDivElement.classList.add('board-game');
    boardGameDivElement.appendChild(contentDivElement);
    boardGameDivElement.appendChild(buttonsDivElement);
 
    boardGameDivElement.setAttribute('data-id', game._id);
 
    return boardGameDivElement;
};
 
function changeGame(e, game) {
 
    const gameElement = e.currentTarget.parentElement.parentElement;
    gameElement.remove();
 
    gameNameInputElement.value  = game.name;
    typeInputElement.value = game.type;
    maxPlayersInputElement.value = game.players;
 
    formContainerElement.setAttribute('data-id', game._id);
 
    editGameButton.removeAttribute('disabled');
 
    addGameButton.setAttribute('disabled', 'disabled');
}
 
function clearInputFields() {
    gameNameInputElement.value = '';
    typeInputElement.value = '';
    maxPlayersInputElement.value = '';
};
 
function getInputData() {
    return {
        name: gameNameInputElement.value,
        type: typeInputElement.value,
        players: maxPlayersInputElement.value
    }
};