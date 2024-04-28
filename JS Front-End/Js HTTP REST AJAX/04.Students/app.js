function attachEvents() {
  const baseURL = 'http://localhost:3030/jsonstore/collections/students';
  const tableTemplateElement = document.querySelector('#results tbody');
  const submitButton = document.getElementById('submit');
  
  const settings = ['firstName', 'lastName', 'facultyNumber', 'grade'];

  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      for (const key in data) {
        const trElement = document.createElement('tr');
        for (const setting of settings) {
          const tdElement = document.createElement('td');
          tdElement.textContent = data[key][setting];
          trElement.appendChild(tdElement);
        }

        tableTemplateElement.appendChild(trElement);
      }
      
    })  

  submitButton.addEventListener('click', () => {
    const firstName = document.querySelector('input[name=firstName]').value;
    const lastName = document.querySelector('input[name=lastName]').value;
    const facultyNumber = document.querySelector('input[name=facultyNumber]').value;
    const grade = document.querySelector('input[name=grade]').value;

    if(firstName!= '' && lastName != '' &&
      facultyNumber != '' && grade != '') {
        fetch(baseURL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            firstName,
            lastName,
            facultyNumber,
            grade,
          })
        })
          .then(res => res.json())
          .then(data => {
            const trElement = document.createElement('tr');
              for (const setting of settings) {
                const tdElement = document.createElement('td');
                tdElement.textContent = data[setting];

                trElement.appendChild(tdElement);
              }
              
            tableTemplateElement.appendChild(trElement);
          })
    }
  });

}

attachEvents();