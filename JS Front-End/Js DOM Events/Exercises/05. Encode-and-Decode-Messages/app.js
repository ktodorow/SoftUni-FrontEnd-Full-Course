function encodeAndDecodeMessages() {
    const inputElement = document.getElementsByTagName('textarea')[0]
    const decodedMessage = document.getElementsByTagName('textarea')[1]
    const encodeButton = document.querySelector('#container #main div:nth-child(1) button');
    const decodeButton = document.querySelector('#container #main div:nth-child(2) button');

    encodeButton.addEventListener('click', (e) => {
        let encoded = [];

        for (let i = 0; i < inputElement.value.length; i++) {
            let currSymbol = inputElement.value.charCodeAt(i);
            encoded.push(String.fromCharCode(currSymbol + 1));
        }

        inputElement.value = '';
        decodedMessage.value = encoded.join('');
    })

    decodeButton.addEventListener('click', (e) => {
        let clickCounter = 0;
        let decoded = [];

        for (let i = 0; i < decodedMessage.value.length; i++) {
            let currSymbol = decodedMessage.value.charCodeAt(i);
            decoded.push(String.fromCharCode(currSymbol -1));
        }
        decodedMessage.value = decoded.join('');
    })
}