function validate() {
    const emailInputElement = document.getElementById('email');
    const matchPattern = /^[a-z]+@[a-z]+\.[a-z]+/;
    const body = document.querySelector('body'); 
    const aLoginElement = document.createElement('a');
    aLoginElement.href = 'logged.html';
    aLoginElement.id = 'loginPage';
    aLoginElement.textContent = 'login!'
    

    emailInputElement.addEventListener('change', (e) => {
        if(!matchPattern.test(e.target.value)) {
            e.target.classList.add('error');
            aLoginElement.remove();
        } else {
            e.target.classList.remove('error');
            body.appendChild(aLoginElement);
        }
    })
}