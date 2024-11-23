function colorize() {
    const elements = document.querySelectorAll('table tr:nth-child(even)');
    for (let el of elements) {
        el.style.background = 'teal';
    }
}