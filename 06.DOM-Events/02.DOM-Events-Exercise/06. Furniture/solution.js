function solve() {
  const inputTextArea = document.querySelector('#exercise textarea:first-of-type');
  const generateButton = document.querySelector('#exercise button:first-of-type');
  const resultTextArea = document.querySelector('#exercise textarea:last-of-type');
  const buyButton = document.querySelector('#exercise button:last-of-type');

  generateButton.addEventListener('click', (e) => {
    const objectsArr = JSON.parse(inputTextArea.value);
    for (const obj of objectsArr) {
      const newTrElement = document.createElement('tr');

      // image:
      const tdImgElement = document.createElement('td');
      const imgElement = document.createElement('img');
      imgElement.src = obj["img"];
      tdImgElement.appendChild(imgElement);
      newTrElement.appendChild(tdImgElement);

      // name:
      const tdNameElement = document.createElement('td');
      const namePElement = document.createElement('p');
      namePElement.textContent = obj.name;
      tdNameElement.appendChild(namePElement);
      newTrElement.appendChild(tdNameElement);

      // price:
      const tdPriceElement = document.createElement('td');
      const pricePElement = document.createElement('p');
      pricePElement.textContent = obj.price;
      tdPriceElement.appendChild(pricePElement);
      newTrElement.appendChild(tdPriceElement);

      // decFactor:
      const tdDecFactorElement = document.createElement('td');
      const decFactorElement = document.createElement('p');
      decFactorElement.textContent = obj["decFactor"];
      tdDecFactorElement.appendChild(decFactorElement);
      newTrElement.appendChild(tdDecFactorElement);

      // checkbox:
      const tdCheckBoxElement = document.createElement('td');
      const checkBoxElement = document.createElement('input');
      checkBoxElement.type = "checkbox";
      tdCheckBoxElement.appendChild(checkBoxElement);
      newTrElement.appendChild(tdCheckBoxElement);

      // append tr to DOM:
      tBodyElement = document.querySelector('tbody');
      tBodyElement.appendChild(newTrElement);
    }
  });

  buyButton.addEventListener('click', (e) => {
    const trElements = document.querySelectorAll('tbody tr');
    const boughtFurniture = [];
    let totalPrice = 0;
    const decFactors = [];

    const checkedElements = 
    Array
    .from(trElements)
    .filter(element => {
      const checkBox = element.querySelector('input[type=checkbox]')
      if (checkBox.checked) {
        return element;
      }
    })
    .forEach(element => {
      const elName = element.querySelector('td:nth-child(2) p').textContent;
      boughtFurniture.push(elName);

      const elPrice = Number(element.querySelector('td:nth-child(3) p').textContent);
      totalPrice += elPrice;

      const elDecFactor = Number(element.querySelector('td:nth-child(4) p').textContent);
      decFactors.push(elDecFactor);
    });

    let averageDecFactor = 0;
    for (let decfactor of decFactors) {
      averageDecFactor += decfactor;
    }

    averageDecFactor /= decFactors.length;


    resultTextArea.value += `Bought furniture: ${boughtFurniture.join(', ')}\n`
    resultTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n` 
    resultTextArea.value += `Average decoration factor: ${averageDecFactor}`
  });
}