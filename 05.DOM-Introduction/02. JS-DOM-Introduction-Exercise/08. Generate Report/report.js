function generateReport() {
    //TODO
    const thElements = document.querySelectorAll('thead tr th');
    const thObjectsArr = Array
        .from(thElements)
        .map(element => {
            const elementCheckbox = element.querySelector('input');
            return {
                'option': element.textContent,
                'checked': elementCheckbox.checked,
            }
        });

    const trElements = document.querySelectorAll('tbody tr');

    const trObjectsArr = Array
    .from(trElements)
    .map(element => {
        let trObject = {};

        const tdItems = element.querySelectorAll('td')
        const tdItemsArr = Array.from(tdItems)
            
        for (let item of tdItemsArr) {
            const i = tdItemsArr.indexOf(item);
            if (thObjectsArr[i]['checked']) {
                trObject[thObjectsArr[i]['option'].toLocaleLowerCase().trim()] = item.textContent;
            }
        }
        
        return trObject;            
    });

    const result = JSON.stringify(trObjectsArr, null, 2);
    textAreaElement = document.getElementById('output');
    textAreaElement.value = result;
}