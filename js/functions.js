import {booksList, bookInfo} from "./constants.js";


export function addBook(item){
    const {volumeInfo: data, id} = item;

    console.log('data', data);
    const element = document.createElement('a');
    element.setAttribute('href', '#');
    element.classList.add('list-group-item');
    element.innerText = data.title;
    element.setAttribute('data-id', id);
    booksList.appendChild(element);

}

export function handleBookClick(e){
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    if(!id)return;

    const book = window.books.find(item => item.id === id);
    console.log(book);
    bookInfo.querySelector('.heading').innerText = `${book.volumeInfo.title}`;

    const body = bookInfo.querySelector('.body');

    body.innerHTML = '';

    const img = document.createElement('img');
    img.setAttribute('src', book.volumeInfo.imageLinks.smallThumbnail);
    body.appendChild(img);

    const p = document.createElement('p');
    p.innerText = book.volumeInfo.description;
    body.appendChild(p);

    const link = document.createElement('a');
    link.innerText = 'Подробнее...';
    link.setAttribute('href', book.volumeInfo.previewLink);
    link.setAttribute('target', '_blank');
    body.appendChild(link);

}