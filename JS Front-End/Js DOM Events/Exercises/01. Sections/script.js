function create(words) {
   const contentElement = document.querySelector('#content');

   for (const word of words) {
      const sectionElement = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';

      contentElement.appendChild(sectionElement).appendChild(p);
   }

   const contentListElements = document.querySelectorAll('#content > div')

   for (const div of contentListElements) {
      const paragraphDiv = div.querySelector('p');
      div.addEventListener('click', (e) => {
         paragraphDiv.style.display = 'block';
      })
   }
}