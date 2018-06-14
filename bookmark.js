(function() {
  let consoleOutput = 'background: #D3D3D3; color: black; font-weight: bold;';

  console.log('%c**** Bookmark started ****', consoleOutput);

  // First work on `div` tags only
  var divObjectHTMLCollection = document.getElementsByTagName('div');
  console.log('%c****divObjectHTMLCollection:****', consoleOutput);
  console.log(divObjectHTMLCollection);

  divElementsTextContent = [].map
    .call(divObjectHTMLCollection, function(node) {
      return node.textContent || node.innerText || ' ';
    })
    .join(' ');
  console.log(`'%c****divElementsTextContent:****`, consoleOutput);
  console.log(divElementsTextContent); // return all innerHtml of div tags

  // convert the string to an array
  let allWords = divElementsTextContent.split(' ');
  console.log(`'%c****allWords****`, consoleOutput);
  console.log(allWords); // return objects of words in allWords as objects

  console.log(`'%c****typeof(allWords)****`, consoleOutput);
  console.log(typeof allWords); // object

  console.log('%c****allWords.length****', consoleOutput);
  console.log(`%cNumber of allWords:  ${allWords.length}`, consoleOutput); // return 4

  // count number of times each word repeat
  var count = {};
  allWords.forEach(function (i) {
    // count[i] = 'test';
    // count[i] = 'test' + count[i]
    count[i] = (count[i]||0) + 1;
    // console.log(count[i]||0);
    //console.log(count[i]);
  });
  console.log('%c****allWords count****', consoleOutput);
  console.log(count);
  console.log(typeof(count));
  console.log(JSON.stringify(count));
  letCountString = JSON.stringify(count);
  console.log(letCountString.length);
  
  // Export word counts to html
  // for (var propt in letCountString) {
  //   console.log(typeof(letCountString[propt]));
    
  // }
  Object.keys(count).forEach(function (key, index) {
    // console.log(key); // return the words
    // console.log(count[key]); // return number of words
    // console.log('%c****Words count result****', consoleOutput);
    console.log(`%c${key} occurs:  ${count[key]} times in the page`, consoleOutput);
    // key: the name of the object key
    // index: the ordinal position of the key within the object 
});
  // for (var i = 0; i < JSON.stringify(count).length; i++) {
  //   console.log(i);
  // }

  // let obj = {};
  // for (let i of allWords) {
  //   console.log(`'%cvalues of allWords:'  ${i}` , consoleOutput);
  //   obj[i] = true;
  // }
  // console.log(obj);
  // // Find number arrays of uniq words in allWords
  // let uniqWord = allWords.reduce(function (a, b) { if (a.indexOf(b) < 0) a.push(b); return a; }, []);
  // console.log(`'%cNumber of uniqWord:'  ${uniqWord.length}` , consoleOutput);

  // // Iterate through all uniq words and find how many times occurs
  // for (var key in uniqWord) {
  //   console.log(uniqWord[key]); // will return each word. Then .Use regular expression to determine how many times the word exist
  //   console.log(typeof (uniqWord[key])); // return string so we can use regular expression.

  //   console.log(allWords[key].match(/word/g));

  // }

  // var string1 = "";
  // var object1 = allWords;

  // for (var property1 in object1) {
  //   string1 = string1 + object1[property1];
  //   console.log(object1[property1]);
  // }

  // console.log(string1);
})();
