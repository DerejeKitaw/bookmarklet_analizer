### Create test page (index.html)

### Extract each(all) word used in the page - hOW?

> get all contents of the page in a body. (HTMLAllCollection)
```js
console.log(document.body)
// return HTMLAllCollection
```
```js
console.log(document.querySelector('*'))
```
> Convert HTMLAllCollection to array
```js
var pageHtmlBodyContent = document.all;
```
> typeof(pageHtmlContent) - > Object
> Exclude `<script>` tag -> TODO: At the last

> Iterate through the page-body and extract all the words
```js
for (var key in pageHtmlContent){console.log(key)}
```
```js
for (var key in pageHtmlContent){
  if(key == 'childNodes'){
console.log(childNodes);
  }
}
```
> First work on `div` tags only - then will find way to go to all available tags
```js
var divObjectHTMLCollection = document.getElementsByTagName("div");
```

> Extract inner html from each div
```js
divElementsTextContent = [].map.call( divObjectHTMLCollection, function(node){
        return node.textContent || node.innerText || "";
    }).join("");
```
> `Hooray HTML elements are extracted from all DIV`

### Determine number of words in the `div`
```js
divElementsTextContent = "this is demo test test output for test test"

// convert the string to an array
let allWords = divElementsTextContent.split(' ');

// convert allWords to string
strinAllWords = JSON.stringify(allWords);


// for (var i=0; i < strinAllWords.length; i++){
//   // console.log(allWords[i]);
//   console.log(strinAllWords.match(/{strinAllWords[i]}+/g)); // return 4 works
// }

for (var i=0; i < allWords.length; i++){
  let word = 
  // console.log(allWords[i]);
  console.log(strinAllWords.match(/{allWords[i]}+/g)); // return 4 works
}




```


### Determine number of times words used in the page