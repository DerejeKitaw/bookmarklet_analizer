(function() {
  let consoleOutput = 'background: #D3D3D3; color: black; font-weight: bold;';

  console.log('%c**** Bookmark started ****', consoleOutput);

  // First work on `div` tags only
  var divObjectHTMLCollection = document.getElementsByTagName('body');
  console.log('%c****divObjectHTMLCollection:****', consoleOutput);
  console.log(divObjectHTMLCollection);

  divElementsTextContent = [].map
    .call(divObjectHTMLCollection, function(node) {
      return node.innerText.trim() || ' ';
    })
    .join(' ');

  wordsArray = [];
  for (var i = 0; i < divElementsTextContent.length; ++i) {
    // divElementsTextContent[i] = divElementsTextContent[i].replace(/(\r\n|\n|\r)/gm, "");
    wordsArray.push(divElementsTextContent[i].replace(/(\r\n|\n|\r)/gm, ''));
    console.log(divElementsTextContent[i]);
  }
  console.log(`'%c****divElementsTextContent:****`, consoleOutput);
  console.log(
    divElementsTextContent.split('↵')[0].replace(/(\r\n|\n|\r)/gm, ' ')
  ); // return all innerHtml of div tags
  console.log(
    typeof divElementsTextContent.split('↵')[0].replace(/(\r\n|\n|\r)/gm, ' ')
  ); // concat
  console.log(
    divElementsTextContent
      .split('↵')[0]
      .replace(/(\r\n|\n|\r)/gm, ' ')
      .split(' ')
  ); // array of strings

  allWords = divElementsTextContent
    .split('↵')[0]
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .split(' ');

  // count number of times each word repeat
  let count = {};
  allWords.forEach(function(i) {
    count[i] = (count[i] || 0) + 1;
  });
  console.log('%c****Summery of allWords count****', consoleOutput);
  console.log(count); // returns {Bookmarker: 1, word: 6, one: 2, two: 2}Bookmarker: 1one: 2two: 2word: 6__proto__: Object
  alert(JSON.stringify(count));
})();

// (function () {let script = document.createElement('script');script.src = 'bookmark.js';document.body.appendChild(script)})();