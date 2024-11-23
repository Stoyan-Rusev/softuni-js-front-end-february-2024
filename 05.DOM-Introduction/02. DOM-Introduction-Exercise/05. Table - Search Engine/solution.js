function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      const searchBarElement = document.getElementById('searchField');
      let searchText = searchBarElement.value.toLowerCase();

      const tableRows = document.querySelectorAll('tbody tr');

      for (let row of tableRows) {
         row.classList.remove('select');
         
         if (row.textContent.toLowerCase().includes(searchText)) {
            row.classList.add('select');
         }      
      }

      searchBarElement.value = '';
   }
}