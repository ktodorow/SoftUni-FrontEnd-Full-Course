function solve() {
  const textInputElement = document.getElementById('text');
  const namingConventionElement = document.getElementById('naming-convention');
  const resultElement = document.getElementById('result');
  let resultString = ''; 

  let wordsFromInput = textInputElement.value.toLowerCase().split(' ');
  
  switch (namingConventionElement.value) {
    case 'Pascal Case':
      resultString = everyFirstCharacterToUpper(wordsFromInput);
    break;
    
    case 'Camel Case':
      resultString += wordsFromInput.shift()
      resultString += everyFirstCharacterToUpper(wordsFromInput);
    break;  
    default:
      resultString = 'Error!'
  }

  resultElement.textContent = resultString;

  function everyFirstCharacterToUpper(arrayOfWords) {
    let result = '';

    for (const word of arrayOfWords) {
      result += word.charAt(0).toUpperCase();
      result += word.slice(1);
    }

    return result;
  }
}