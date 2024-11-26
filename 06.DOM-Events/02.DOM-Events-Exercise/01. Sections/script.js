function create(words) {
   const contentElement = document.getElementById('content');
   const divElementsFragment = document.createDocumentFragment();

   for (const word of words) {
      const pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';

      const divElement = document.createElement('div');
      divElement.appendChild(pElement);
      divElement.addEventListener('click', showChildElement);
      divElementsFragment.appendChild(divElement);
   }

   function showChildElement(e) {
      const currentElement = e.currentTarget;
      currentElement.children[0].style.display = 'block';
   }

   contentElement.appendChild(divElementsFragment);
}