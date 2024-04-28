function validate() {
    const emailInputElement = document.getElementById('email');
    const matchPattern = /^[a-z]+@[a-z]+\.[a-z]+/;

    emailInputElement.addEventListener('change', (e) => {
        if(!matchPattern.test(e.target.value)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    })
}