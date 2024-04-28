window.addEventListener("load", solve);

function solve() {
    const expenseInputElement = document.querySelector('input[id=expense]');
    const amountInputElement = document.querySelector('input[id=amount]');
    const dateInputElement = document.querySelector('input[id=date]');
    const addButton = document.querySelector('button[id=add-btn]');
    const deleteButton = document.querySelector('.btn.delete');
    const previewListElement = document.querySelector('#right-container #preview-list');
    const expensesListElement =  document.querySelector('#right-container #expenses #expenses-list');

    addButton.addEventListener('click', () => {
        const expenseInput = expenseInputElement.value;
        const amountInput = amountInputElement.value;
        const dateInput = dateInputElement.value;

        if(expenseInput != '' && amountInput != '' &&
        dateInput != '') {
            const liElement = createPreviewElement(expenseInput, amountInput, dateInput);
            previewListElement.appendChild(liElement);

            addButton.setAttribute('disabled', true);

            expenseInputElement.value = '';
            amountInputElement.value = '';
            dateInputElement.value = '';

            const editButtonElement = liElement.querySelector('.btn.edit');
            const okButtonElement = liElement.querySelector('.btn.ok');

            editButtonElement.addEventListener('click', () => {
                expenseInputElement.value = expenseInput;
                amountInputElement.value = amountInput;
                dateInputElement.value = dateInput;

                liElement.remove();

                addButton.removeAttribute('disabled', true);
            })

            okButtonElement.addEventListener('click', () => {
                const liButtonsElements = liElement.querySelector('.buttons');
                liElement.removeChild(liButtonsElements);
                expensesListElement.appendChild(liElement);

                addButton.removeAttribute('disabled', true);
            })

            deleteButton.addEventListener('click', () => {
                window.location.reload();
            })
        }
    })

    function createPreviewElement(expense, amount, date) {                
        const pExpenseElement = document.createElement('p');
        pExpenseElement.textContent = `Type: ${expense}`;
        
        const pAmountElement = document.createElement('p');
        pAmountElement.textContent = `Amount: ${amount}$`;
        
        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pExpenseElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);
        
        const divButtonsWrapper = document.createElement('div');
        divButtonsWrapper.classList.add('buttons');

        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'edit');
        editButton.textContent = 'edit';

        const acceptButton = document.createElement('button');
        acceptButton.classList.add('btn', 'ok');
        acceptButton.textContent = 'ok';

        divButtonsWrapper.appendChild(editButton);
        divButtonsWrapper.appendChild(acceptButton);

        const liElement = document.createElement('li');
        liElement.classList.add('expense-item');
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtonsWrapper);

        return liElement;
    }
}