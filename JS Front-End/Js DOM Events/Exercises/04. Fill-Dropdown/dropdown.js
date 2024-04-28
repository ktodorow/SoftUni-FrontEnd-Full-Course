function addItem() {
    const menuElement = document.getElementById('menu');
    const itemTextElement = document.getElementById('newItemText');
    const itemTextValue = document.getElementById('newItemValue');

    const optionElement = document.createElement('option');
    optionElement.textContent = itemTextElement.value;
    optionElement.value = itemTextValue.value;

    menuElement.appendChild(optionElement);

    itemTextElement.value = '';
    itemTextValue.value = '';
}