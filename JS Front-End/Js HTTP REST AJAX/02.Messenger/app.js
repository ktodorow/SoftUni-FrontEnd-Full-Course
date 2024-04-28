function attachEvents() {
    const messagesUrl = 'http://localhost:3030/jsonstore/messenger';

    const messagesAreaElement = document.getElementById('messages');
    const nameOfUserElement = document.querySelector('input[name=author]')
    const contentOfUserElement = document.querySelector('input[name=content]')
    const submitButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');

    submitButton.addEventListener('click', () => {
        const user = nameOfUserElement.value;
        const message = contentOfUserElement.value;

        if(user != '' &&  message != '') {
            fetch(messagesUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    author: user,
                    content: message,
                })
            })
        }

        nameOfUserElement.value = '';
        contentOfUserElement.value = '';
    });

    refreshButton.addEventListener('click', () => {
        messagesAreaElement.value = '';
        
        fetch(messagesUrl)
            .then(res => res.json())
            .then(data => {
                const messageLog = Object.values(data)
                    .map(el => { 
                        return `${el.author}: ${el.content}`;
                    })

                messagesAreaElement.value = messageLog.join('\n')
            });
    });
}

attachEvents();