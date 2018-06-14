(function() {
  let consoleOutput = 'background: #D3D3D3; color: black; font-weight: bold;';

  console.log('%c**** Bookmark started ****', consoleOutput);

  // First work on `div` tags only
  var divObjectHTMLCollection = document.getElementsByTagName('body');
  console.log('%c****divObjectHTMLCollection:****', consoleOutput);
  console.log(divObjectHTMLCollection);
  
  divElementsTextContent = [].map
  .call(divObjectHTMLCollection, function (node) {
      return node.innerText.trim() || ' ';
    })
    .join(" ");

    wordsArray = [];
  for (var i = 0; i < divElementsTextContent.length; ++i) {
    // divElementsTextContent[i] = divElementsTextContent[i].replace(/(\r\n|\n|\r)/gm, "");
    wordsArray.push(divElementsTextContent[i].replace(/(\r\n|\n|\r)/gm, ""));
    console.log(divElementsTextContent[i]); 
  }
    console.log(`'%c****divElementsTextContent:****`, consoleOutput);
    console.log(divElementsTextContent.split('↵')[0].replace(/(\r\n|\n|\r)/gm, " ")); // return all innerHtml of div tags
    console.log(typeof(divElementsTextContent.split('↵')[0].replace(/(\r\n|\n|\r)/gm, " "))); // concat
    console.log(divElementsTextContent.split('↵')[0].replace(/(\r\n|\n|\r)/gm, " ").split(" ")); // array of strings
    
  //   // convert the string to an array
  //   let allWords = divElementsTextContent.split('  ');
  //   allWords = allWords.filter(Boolean); // remove empty strings
  //   // allWords = allWords.filter('↵'); // remove empty strings
  // wordsArray = [];
  // for (i = 0; i < allWords.length; i++ ){
  //   console.log(allWords[i]); // return objects of words in allWords as objects
  //   if (allWords[i].split('  ')[0].trim() !== "") {
  //     wordsArray.push(allWords[i].split('  ')[0].match(/[^↵]/g).join(''));
  //     // kk[0].match(/[^↵]/g).join('')
  //   }
  //   console.log(`'%c****allWords[i].split(' ')****`, consoleOutput);
  //   console.log(allWords[i].split('  ')[0]);
  // }
  // console.log(`'%c****wordsArray****`, consoleOutput);
  // console.log(wordsArray);

  // console.log(`'%c****allWords****`, consoleOutput);
  // console.log(allWords); // return objects of words in allWords as objects

  // console.log(`'%c****typeof(allWords)****`, consoleOutput);
  // console.log(typeof (allWords)); // object

  // console.log('%c****allWords.length****', consoleOutput);
  // console.log(`%cNumber of allWords:  ${allWords.length}`, consoleOutput); // return 4

  // count number of times each word repeat
  let count = {};
  // allWords.forEach(function (i) {
  //   // count[i] = 'test';
  //   // count[i] = 'test' + count[i]
  //   count[i] = (count[i]||0) + 1;
  //   // console.log(count[i]||0);
  //   //console.log(count[i]);
  // });
  console.log('%c****Summery of allWords count****', consoleOutput);
  console.log(count);
  console.log(typeof(count));
  console.log('%c****JSON.stringify(count)****', consoleOutput);
  console.log(JSON.stringify(count));
  console.log('%c****JSON.stringify(count).length****', consoleOutput);
  letCountString = JSON.stringify(count);
  console.log(letCountString.length);
  
//   for (var i = 0; i < divObjectHTMLCollection.children.length; i++) {
//     console.log(divObjectHTMLCollection.children[i]);
// }


  // Export word counts to html
  // for (var propt in letCountString) {
  //   console.log(typeof(letCountString[propt]));
    
  // }
  // let htmlObjectHeader = [];
  // let htmlObjectBody = [];
  // let htmlObjectfooter = [];
  // let i = 0;
  // let j = 0;
  Object.keys(count).forEach(function (key, index) {
    // console.log(key); // return the words
    // console.log(count[key]); // return number of words
    // console.log('%c****Words count result****', consoleOutput);
    // console.log(`%c${key} occurs:  ${count[key]} times in the page`, consoleOutput);


    // if (i == 0) {
    //   htmlObjectHeader.push('<table class="table table-hover">') ;
    //   htmlObjectHeader.push('<thead>') ;
    //   htmlObjectHeader.push('<tr>') ;
    //   htmlObjectHeader.push('<th>Words</th>') ;
    //   htmlObjectHeader.push('<th>frequency of word usage </th>') ;
    //   htmlObjectHeader.push('</tr>') ;
    //   htmlObjectHeader.push('</thead>') ;
    //   htmlObjectBody.push('<tbody>') ;
    //   i = 1;
    // }
    // htmlObjectBody.push('<tr>') ;
    // htmlObjectBody.push('<td>') ;
    // htmlObjectBody.push(key) ;
    // htmlObjectBody.push('</td>') ;
    // htmlObjectBody.push('<td>') ;
    // htmlObjectBody.push(count[key]) ;
    // htmlObjectBody.push('</td>') ;
    // htmlObjectBody.push('</tr>');
    // if (j == 0) {
    //   htmlObjectfooter.push('</tbody>') ;
    //   htmlObjectfooter.push('</table>') ;
    //   j = 1;
    // }
    
    
  });
  // allHtml=[...htmlObjectHeader , ...htmlObjectBody ,...htmlObjectfooter]
  // console.log("".concat(...htmlObjectHeader , ...htmlObjectBody ,...htmlObjectfooter));
  // document.getElementById('word_summery').innerHTML = "".concat(...htmlObjectHeader , ...htmlObjectBody ,...htmlObjectfooter);
})();
