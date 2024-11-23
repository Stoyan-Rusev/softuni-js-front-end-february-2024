function solve() {
  function convertTocamelCase(strArray, finalOutput) {
    strArray[0] = String(strArray[0]).toLowerCase();

    for (let i = 1; i < strArray.length; i++) {
      let splittedWord = String(strArray[i]).toLowerCase().split('');
      splittedWord[0] = String(splittedWord[0]).toUpperCase();
      strArray[i] = splittedWord.join('');
    }

    finalOutput = strArray.join('');
    return finalOutput;
  }

  function convertToPascalCase(strArray, finalOutput) {
    for (let i = 0; i < strArray.length; i++) {
      let splittedWord = String(strArray[i]).toLowerCase().split('');
      splittedWord[0] = String(splittedWord[0]).toUpperCase();
      strArray[i] = splittedWord.join('');
    }

    finalOutput = strArray.join('');
    return finalOutput;
  }

  let output = '';
  let textInput = document.querySelector('#text').value.split(' ');
  const convention = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  if (convention === "Camel Case") {
    output = convertTocamelCase(textInput, output);
  } else if (convention === "Pascal Case") {
    output = convertToPascalCase(textInput, output);
  } else {
    output = "Error!"
  }

  resultElement.textContent = output;
}