function search() {

   const listElements = document.querySelectorAll('li');
   const inputText = document.getElementById('searchText').value;
   let resultElement = document.getElementById('result');
   let counter = 0;

   for (let element of listElements) {
      element.style.fontWeight = 'normal';
      element.style.textDecoration = 'none';

      if (element.textContent.includes(inputText)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         counter++;
      }
   }

   resultElement.textContent = `${counter} matches found`;
}
