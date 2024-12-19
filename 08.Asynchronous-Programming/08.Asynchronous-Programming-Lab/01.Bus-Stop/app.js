function getInfo() {
    const stopIdElement = document.getElementById('stopId');
    const resultStopElement = document.getElementById('stopName');
    const busesListElement = document.getElementById('buses');
    busesListElement.textContent = '';

    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    const stopId = stopIdElement.value;

    fetch(`${baseUrl}/${stopId}`)
        .then(res => res.json())
        .then(data => {
            resultStopElement.textContent = data.name;
            for (const bus in data.buses) {
                const newLiItem = document.createElement('li');
                newLiItem.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
                busesListElement.appendChild(newLiItem);
            }
        })
        .catch(() => {
            resultStopElement.textContent = 'Error';
            busesListElement.textContent = '';
        });

}
