function addItem() {
    const itemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let liElementToAdd = document.createElement("li");

    liElementToAdd.textContent = inputElement.value;

    itemsElement.appendChild(liElementToAdd);
}