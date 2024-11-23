function editElement(ref, match, replacer) {
    const textContent = ref.textContent;
    const editedTextContent = textContent.replace(new RegExp(match, 'g'), replacer);
    ref.textContent = editedTextContent;
}