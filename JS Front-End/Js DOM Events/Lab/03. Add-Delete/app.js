function addItem() {
    const itemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let liElementToAdd = document.createElement("li");
    
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.textContent = '[Delete]';

    liElementToAdd.textContent = inputElement.value;
    liElementToAdd.appendChild(a);

    itemsElement.appendChild(liElementToAdd);

    inputElement.value = '';

    a.addEventListener('click', () => {
        liElementToAdd.remove();
    })
}