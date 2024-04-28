function deleteByEmail() {
    const tableListElement = document.querySelectorAll('#customers tbody tr');
    const inputElement = document.querySelector('label input');
    const resultElement = document.getElementById('result');
    
    for (const element of tableListElement) {
        const emailElement = element.querySelector('td:nth-child(2)')
        let isDeleted = false;

       if(emailElement.textContent === inputElement.value) {
            element.remove();
            isDeleted = true;
       }

       if(isDeleted) {
            resultElement.textContent = 'Deleted.';
            inputElement.value = '';
            break;   
       } else {
            resultElement.textContent = 'Not found.';
       }
    }
}

//papazov solution
function deleteByEmailPapazov() {
    const tableListElement = document.querySelectorAll('#customers tbody tr');
    const inputElement = document.querySelector('label input');
    const resultElement = document.getElementById('result');
    
    const resultTrElements = Array
        .from(tableListElement)
        .find(element => element.children[1].textContent.includes(inputElement.value))
        
    if(resultTrElements) {
        resultTrElements.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}