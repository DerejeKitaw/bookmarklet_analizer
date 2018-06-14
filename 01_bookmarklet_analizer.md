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
var divElements = document.getElementsByTagName("div");
```

> Try regular expression


### Determine number of times words used in the page