function solve() {
  const tableElement = document.querySelector('.table tbody')
  const inputElement = document.querySelector('#exercise textarea')
  const generateButton = document.querySelector('#exercise button');
  const buyButton = document.querySelector('#exercise button:last-of-type');
  const outputElement = document.querySelector('#exercise textarea:last-of-type')

  generateButton.addEventListener('click', () => {
    let object = JSON.parse(inputElement.value);
    for (const furniture of object) {
      const imgElement = document.createElement('img')
      imgElement.src = furniture.img;
      const imageTdElement = document.createElement('td');
      imageTdElement.appendChild(imgElement);

      const pNameElement = document.createElement('p')
      pNameElement.textContent = furniture.name;
      const paragraphNameTd= document.createElement('td');
      paragraphNameTd.appendChild(pNameElement);

      const priceElement = document.createElement('p')
      priceElement.textContent = furniture.price;
      const priceTd= document.createElement('td');
      priceTd.appendChild(priceElement);

      const decFactorElement = document.createElement('p')
      decFactorElement.textContent = furniture.decFactor;
      const decFactorTdElement= document.createElement('td');
      decFactorTdElement.appendChild(decFactorElement);

      const checkboxElement = document.createElement('input')
      checkboxElement.type = 'checkbox';
      const checkboxTdlement= document.createElement('td');
      checkboxTdlement.appendChild(checkboxElement);

      const trElement = document.createElement('tr');

      trElement.appendChild(imageTdElement);
      trElement.appendChild(paragraphNameTd);
      trElement.appendChild(priceTd);
      trElement.appendChild(decFactorTdElement);
      trElement.appendChild(checkboxTdlement);

      tableElement.appendChild(trElement)
    }
  });

  buyButton.addEventListener('click', () => {
    let totalPrice = 0;
    let decFactorTotal = 0;
    let markedProducts = 0;
    let names = [];

    Array
      .from(tableElement.children)
      .forEach(trElement => {
        const checkbox = trElement.querySelector('input[type=checkbox]');
        if(!checkbox.checked) {
          return;
        }

        const name = trElement.children.item(1).textContent;
        const price = Number(trElement.children.item(2).textContent);
        const decFactor = Number(trElement.children.item(3).textContent);

        names.push(name);
        totalPrice += price;
        decFactorTotal += decFactor;
        markedProducts++;
      })

      outputElement.value += 
      `Bought furniture: ${names.join(', ')}\n` + 
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${(decFactorTotal / markedProducts)}`;
  })
}