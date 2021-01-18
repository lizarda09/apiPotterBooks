// https://www.googleapis.com/books/v1/volumes?q=harry+potter
import {serverUrl} from "./constants.js";
import {addBook, handleBookClick} from "./functions.js";

fetch(`${serverUrl}?q=harry+potter`)
    .then(response => response.json())
    .then(result => {
            const {items: books} = result;
            console.log(books);
            window.books = books;

            books.forEach(addBook);
}).catch(error => console.error(error));

document.body.addEventListener('click', handleBookClick);