function fetchBooks() {

   let books = fetch('https://anapioficeandfire.com/api/books')
   .then(resp=> resp.json())
   .then(json => renderBooks(json))
   return books
 }

 function renderBooks(books) {
function renderBooks(books) {
   })
 }


 document.addEventListener('DOMContentLoaded', function() {
   fetchBooks()
 })