function focused() {
    const inputElements = document.querySelectorAll('input[type=text]');

    for (const element of inputElements) {
        element.addEventListener('focus', (e) => {
            e.target.parentElement.classList.add('focused');
        })
    }

    for (const element of inputElements) {
        element.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
            e.target.value = '';
        })
    }
}