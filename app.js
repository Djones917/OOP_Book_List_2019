// This will be ES5 the we will use ES6 in the other file
//console.log('Connected!');

// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function Ui() {}




// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    console.log('test');

    e.preventDefault();
});