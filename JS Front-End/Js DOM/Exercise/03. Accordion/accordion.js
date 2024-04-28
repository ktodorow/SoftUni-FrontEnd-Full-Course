function toggle() {
    const buttonTextElement = document.getElementsByClassName('button')[0];
    const extraContentElement = document.getElementById('extra');

    switch(buttonTextElement.textContent) {
        case 'More':
            buttonTextElement.textContent = 'Less'
            extraContentElement.style.display = 'block';
        break;
        case 'Less':
            buttonTextElement.textContent = 'More'
            extraContentElement.style.display = 'none';
        break;
    }
}