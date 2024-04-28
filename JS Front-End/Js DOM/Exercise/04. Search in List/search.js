function search() {
   const townsListElement = document.getElementById('towns');
   const searchValue = document.getElementById('searchText').value;
   const resultElement = document.getElementById('result');
   let matches = 0;
   let towns = Array.from(townsListElement.children);
   for (const town of towns) {
      town.style.textDecoration = 'none';
      town.style.fontWeight = 'normal';

      if(town.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches++;
      }
   }

   resultElement.textContent = `${matches} matches found`;
}