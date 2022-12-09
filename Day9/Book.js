class Book{
    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{
    addBookToList(book){
        const list=document.getElementById("book-list");

        const row=document.createElement('tr');

        row.innerHTML=`<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="#" class='delete'></a></td>`

        list.appendChild(row);
    }

    clearFormFields(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';
    }

    showAlert(message, className){
        const div=document.createElement('div');

        div.className=`alert ${className}`;

        div.appendChild(document.createTextNode(message));

        const container=document.querySelector('.container');

        const form=document.querySelector('#book-form');

        container.insertBefore(div,form);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },2000);

    }

    deleteBook(target){
        if(target.className=='delete')
            target.parentElement.parentElement.remove();
    }
}

class Store{

    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books=[];
        }else{
            books=JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks((book)=>{
        const books= Store.getBooks();

        const ui= new UI;

        ui.addBookToList(book);
    });

    static addBook
}