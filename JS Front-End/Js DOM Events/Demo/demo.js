let randomElement = document.getElementById('randomElement');
let listElement = document.querySelector('ul')

//creating a new DOM element BUT NOT ATTACHED TO IT.
let p = document.createElement("p");
let li = document.createElement("li");

//adding textContent to the created element
p.textContent = 'just a paragraph';
li.textContent = 'element in the list';

//attaching the new created element to the parent
randomElement.appendChild(p);
listElement.appendChild(li);

//clone existing element
const copiedElement = p.cloneNode(true) //true -> gets everything associated with the element
