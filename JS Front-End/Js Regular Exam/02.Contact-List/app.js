window.addEventListener("load", solve);

function solve() {
  const nameInputEl = document.getElementById('name');
  const phoneInputEl = document.getElementById('phone');
  const categoryEl = document.getElementById('category');

  const checkCollectionEl = document.getElementById('check-list');

  const contacsCollection = document.getElementById('contact-list');

  const addButton = document.getElementById('add-btn');

  addButton.addEventListener('click', () => {
    const fragment = document.createDocumentFragment();

    const name = nameInputEl.value;
    const phone = phoneInputEl.value;
    const category = categoryEl.value;

    if(name != '' && phone != '' && category != ''){
      const editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
  
      const saveButton = document.createElement('button');
      saveButton.classList.add('save-btn');
  
      const buttonsElements = document.createElement('div');
      buttonsElements.classList.add('buttons');
      buttonsElements.appendChild(editButton);
      buttonsElements.appendChild(saveButton);
  
      const nameElement = document.createElement('p');
      nameElement.textContent = `name:${name}`;
      const phoneElement = document.createElement('p');
      phoneElement.textContent = `phone:${phone}`;
      const categoryElement = document.createElement('p');
      categoryElement.textContent = `category:${category}`;
  
      const article = document.createElement('article');
      article.appendChild(nameElement);
      article.appendChild(phoneElement);
      article.appendChild(categoryElement);
  
      const liElement = document.createElement('li');
  
      liElement.appendChild(article);
      liElement.appendChild(buttonsElements);
  
      fragment.appendChild(liElement);
  
      checkCollectionEl.appendChild(fragment);

      nameInputEl.value = '';
      phoneInputEl.value = '';
      categoryEl.value = '';
  
      editButton.addEventListener('click', () => {
        nameInputEl.value = name;
        phoneInputEl.value = phone;
        categoryEl.value = category;
  
        liElement.remove();
      });
  
      saveButton.addEventListener('click', () => {
        liElement.remove();
  
        liElement.removeChild(buttonsElements);
  
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('del-btn');
  
        liElement.appendChild(deleteButton);
  
        contacsCollection.appendChild(liElement);
  
        deleteButton.addEventListener('click', () => {
          liElement.remove();
        })
      })
    }
  
  })
}