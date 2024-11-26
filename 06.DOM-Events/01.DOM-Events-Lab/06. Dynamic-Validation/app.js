function validate() {
    const inputElement = document.getElementById('email');
    inputElement.addEventListener('change', onChange);

    function onChange(e) {
        const textElement = e.currentTarget
        const text = textElement.value;
        const matches = text.match(/([a-z]+@[a-z]+\.[a-z]+)/g);
        
        if (matches == null) {
            textElement.classList.add('error');
        } else {
            textElement.classList.remove('error');
        }
    }
}