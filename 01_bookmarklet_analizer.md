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
divElementsTextContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quibusdam necessitatibus doloremque numquam nesciunt odit eligendi placeat qui harum, corporis exercitationem perferendis repellat recusandae veniam expedita repudiandae suscipit dolore cumque?Seconed div "

// convert the string to an array
let allWords = divElementsTextContent.split(' ');

if (allWords == null || allWords.isEmpty()) { return 0; }

function numberOfOccurance(item, index) {
  console.log(item + occurs + allWords.match(/Lorem+/))
     
}
// Determine how many times words repeated
allWords.forEach(numberOfOccurance)

```


### Determine number of times words used in the page