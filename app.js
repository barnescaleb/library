let library = [];


// Constructor Function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Elements
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.read');
const tableDisplay = document.querySelector('.tableDisplay');
const form = document.querySelector('form').addEventListener("submit", (e) =>{
    e.preventDefault();
    addBookToLibrary();
    clearForm();
});



// Creates Objects
addBookToLibrary = () => {
    if (title.value.length === 0 || author.value.length === 0 || pages.value.length === 0) {
        alert("Please fill out the fields"); 
        return;
    }

    const newBook = new Book(title.value, author.value, pages.value, read.value );

    library.push(newBook);
    displayBook();
}

// Creates Books to Display 
displayBook = () => {
    tableDisplay.innerHTML = "";
    library.forEach((newBook, actionBtn) => {
        const htmlBook = `
        <div class="tr">
        <tr>
            <div class="infoContainer">
                <div class="titleCard">
                    <td>
                        <p>Title</p>
                        <p>${newBook.title}</p>
                    </td>
                </div>
                <div class="authorCard">
                    <td>
                        <p>Author</p>
                        <p>${newBook.author}</p>
                    </td>
                </div>
                <div class="pagesCard">
                    <td>
                        <p>Title</p>
                        <p>${newBook.pages}</p>
                    </td>
                </div>
            </div>
            <div class="statusContainer">
                <td><button id=${actionBtn} class="statusBtn" onclick="changeStatus(this)">${newBook.read}</button></td>
                <td><button id=${actionBtn} class="deleteBtn" onclick="remove(this)">Delete</button></td>
            </div>
        </tr>
    </div>
    `;
    tableDisplay.insertAdjacentHTML("afterbegin", htmlBook);
    });
}

// Removes card from page
remove = (option) => {

    console.log(option.id);
    let book = library.indexOf(option.id);

    if (book !== undefined) {
        library.splice(book, 1);
        console.log(library)
    }

    displayBook();
}

// Changes between read and not read
changeStatus = (option) => {

    console.log(option);
    optionYe = "read"
    optionNo = "not read"

    if(option.innerHTML === optionYe) {
        option.innerHTML = optionNo;
    } else {
        option.innerHTML = optionYe;
    }


}


// Clears form
clearForm = () => {
    title.value = "";
    author.value = "";
    pages.value = "";
}


