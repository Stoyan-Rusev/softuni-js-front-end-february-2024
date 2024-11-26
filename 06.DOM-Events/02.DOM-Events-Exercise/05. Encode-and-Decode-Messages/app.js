function encodeAndDecodeMessages() {
    const messageArea = document.querySelector('div:nth-child(1) textarea');
    const encodeButton = document.querySelector('div:nth-child(1) button');

    const lastMessageArea = document.querySelector('div:nth-child(2) textarea');
    const decodeButton = document.querySelector('div:nth-child(2) button');

    encodeButton.addEventListener('click', (e) => {
        let encodedMessage = messageArea
        .value
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');

        lastMessageArea.value = encodedMessage;
        messageArea.value = ''
    });

    decodeButton.addEventListener('click', (e) => {
        let decodedMessage = lastMessageArea
        .value
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
        .join('');

        lastMessageArea.value = decodedMessage;
    })
}