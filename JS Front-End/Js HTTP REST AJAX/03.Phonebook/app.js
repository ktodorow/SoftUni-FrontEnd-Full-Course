function attachEvents() {
    const phoneBookURL = 'http://localhost:3030/jsonstore/phonebook';

    const phoneBookElement = document.getElementById('phonebook');
    const loadButton = document.getElementById('btnLoad');
    const createButton = document.getElementById('btnCreate');
    const personInputElement = document.getElementById('person');
    const phoneInputElement = document.getElementById('phone');

    const liLoadRequest = () => {
        fetch(phoneBookURL)
        .then(res => res.json())
        .then(phoneCollection => {
            phoneBookElement.innerHTML = '';
            const phonesFragment = document.createDocumentFragment();
            
            Object.values(phoneCollection)
                .forEach(element => {
                    const liElement = document.createElement('li');
                    liElement.setAttribute('id', element._id);
                    liElement.textContent = `${element.person}: ${element.phone}`
                    
                    const deleteButton = document.createElement('button');
                    deleteButton.setAttribute('value', element._id);
                    deleteButton.textContent= 'Delete';

                    deleteButton.addEventListener('click', () => {
                        fetch(`${phoneBookURL}/${element._id}`, {
                            method: 'DELETE'
                        })
                            .then(() => {
                                liElement.remove();
                            });
                    });

                    liElement.appendChild(deleteButton);
                    
                    phonesFragment.appendChild(liElement);
                });

            phoneBookElement.appendChild(phonesFragment);
        })
    };

    const createRequest = () => {
        const person = personInputElement.value;
        const phone = phoneInputElement.value;

        fetch(phoneBookURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person,
                phone,
            })
        })
            .then(() => liLoadRequest())

        personInputElement.value = '';
        phoneInputElement.value = '';
    }
    
    //load phone numbers in phonebook
    loadButton.addEventListener('click', liLoadRequest);
    
    //create person with phone
    createButton.addEventListener('click', createRequest);
}

attachEvents();