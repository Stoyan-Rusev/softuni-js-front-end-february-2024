function extract(content) {
    const textContent = document.getElementById(content).textContent;
    let regex = /\((.*?)\)/g;
    let matches = textContent.match(regex);
    return matches.join('; ');
}