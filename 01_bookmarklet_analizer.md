### Create test page (index.html)

### Extract each(all) word used in the page - hOW?

> get all contents of the page in a body. (HTMLAllCollection)
```js
console.log(document.body)
// return HTMLAllCollection
```
> Convert HTMLAllCollection to array
```js
var pageHtmlBodyContent = document.all;
```
> typeof(pageHtmlContent) - > Object
> Exclude `<script>` tag -> TODO: At the last

> Iterate through the page-body and extract all the words


### Determine number of times words used in the page