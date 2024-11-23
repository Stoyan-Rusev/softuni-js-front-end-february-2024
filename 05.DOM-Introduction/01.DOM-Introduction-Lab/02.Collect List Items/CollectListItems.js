function extractText() {
    let finalContent = [];
    const listItems = document.getElementsByTagName('li');

    for (let current of listItems) {
        finalContent.push(current.textContent);
    }

    let textArea = document.querySelector('textarea');
    textArea.textContent = finalContent.join('\n');
}