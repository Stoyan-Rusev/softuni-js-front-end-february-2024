function solve() {
  //TODO
  const textAreaElement = document.getElementById ('input');
  let sentencesArr = textAreaElement
  .value
  .slice(0, -1)
  .split('.')
  .filter(sentence => !!sentence);
  // .forEach(sentence => sentence.trim());

  console.log(sentencesArr);
  let outputElement = document.getElementById('output');
  outputElement.innerHTML = '';

  let sentenceGroupArr = [];
  let sentenceCounterForGroup = 0;

  for (let sentence of sentencesArr) {
    sentenceGroupArr.push(sentence);
    sentenceCounterForGroup++;

    if (sentenceGroupArr.length === 3) {
      const paragraph = `<p>${sentenceGroupArr.join('.')}.</p>`;
      outputElement.innerHTML += paragraph;
      sentenceGroupArr = [];
      sentenceCounterForGroup = 0;
    }
  }

  if (sentenceGroupArr.length > 0) {
    const paragraph = `<p>${sentenceGroupArr.join('.')}.</p>`;
    outputElement.innerHTML += paragraph;
  }
}