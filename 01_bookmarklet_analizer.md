### Create test page (index.html)

### Extract each(all) word used in the page - hOW?

> get all contents of the page. (HTMLAllCollection)
```js
console.log(document.all)
// return HTMLAllCollection
```
> Convert HTMLAllCollection to array
```js
var pageHtmlContent = Array.prototype.slice.call( document.all );
```
> Iterate through the page and extract all the words


### Determine number of times words used in the page