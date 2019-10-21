$(document).ready(function() {

    $("#addBooks").submit(function(event) {
        event.preventDefault();
        Populate();
        firstSubmit = false;
        if(checkStorage($("#title").val(), $("#author").val())){
            alert("Book is already registered in this library!");
        } else {
            arrayBooks.push(new Book($("#title").val(), $("#author").val(), $("#pages").val(), $("#status").val()));
            fillTable();
            $("#formToAdd").css("display", "none");
            $("#formToSearch").css("display", "none");
            $("#table").css("display", "block");
        }
        $(this).trigger("reset");
    });

    $("#searchBooks").submit(function(event) {
        event.preventDefault();
        Populate();
        firstSubmit = false;
        if(checkStorage($("#searchTitle").val(),$("#searchAuthor").val())){
            searchBookInfo($("#searchTitle").val(),$("#searchAuthor").val());
            $("#formToAdd").css("display", "none");
            $("#formToSearch").css("display", "none");
            $("#table").css("display", "block");
        } else {
            alert("The book you are searching for is not registered in this library!");
        }
        $(this).trigger("reset");
    });

    $(document).on('click', '.changeStatus', function() {
        if($(this).text() == "Read") {
            $(this).text("Not Read");
        } else {
            $(this).text("Read");
        }
    });

    $(document).on("click", ".deleteCol", function() {
        if(confirm('Book will be deleted from library. Continue?')){
            var id = parseInt($(this).attr("id"));
            arrayBooks.splice(id - 1, 1);
            fillTable();
        }
    });

    $('#returnButton').click(function() {
        $("#table").css("display", "none");
        $("#formToAdd").css("display", "block");
        $("#formToSearch").css("display", "block");
    });

    function fillTable() {

        $("tbody").empty();

        for (var i = arrayBooks.length; i > 0; i--) {
            $("tbody").append("<tr>");
            $("tbody").append("<td>" + arrayBooks[i - 1].getTitle() + "</td>");
            $("tbody").append("<td>" + arrayBooks[i - 1].getAuthor() + "</td>");
            $("tbody").append("<td>" + arrayBooks[i - 1].getPages() + "</td>");
            $("tbody").append("<td><button type='button' class='changeStatus btn btn-outline-info'>" + arrayBooks[i - 1].getStatus() + "</button></td>");
            $("tbody").append("<td><button type='button' class='deleteCol btn btn-outline-danger' id=" + i + ">" + "Delete</button></td>");
            $("tbody").append("</tr>");
        }

    }

    function checkStorage(bookTitle, bookAuthor){
        for (var i = arrayBooks.length; i > 0; i--) {
            if(arrayBooks[i - 1].getTitle().toLowerCase() == bookTitle.toLowerCase() && arrayBooks[i - 1].getAuthor().toLowerCase() == bookAuthor.toLowerCase()){
                return true;
            }
            return false;
        }
    }

    function searchBookInfo(bookTitle, bookAuthor){
        $("tbody").empty();

        for (var i = arrayBooks.length; i > 0; i--) {
            if(arrayBooks[i - 1].getTitle().toLowerCase() == bookTitle.toLowerCase() && arrayBooks[i - 1].getAuthor().toLowerCase() == bookAuthor.toLowerCase()){
                $("tbody").append("<tr>");
                $("tbody").append("<td>" + arrayBooks[i - 1].getTitle() + "</td>");
                $("tbody").append("<td>" + arrayBooks[i - 1].getAuthor() + "</td>");
                $("tbody").append("<td>" + arrayBooks[i - 1].getPages() + "</td>");
                $("tbody").append("<td><button type='button' class='changeStatus btn btn-outline-info'>" + arrayBooks[i - 1].getStatus() + "</button></td>");
                $("tbody").append("<td><button type='button' class='deleteCol btn btn-outline-danger' id=" + i + ">" + "Delete</button></td>");
                $("tbody").append("</tr>");
            }
        }
    }

});

var arrayBooks = [];

var firstSubmit = true;

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.getTitle = function() {
        return this.title;
    }

    this.getAuthor = function() {
        return this.author;
    }

    this.getPages = function() {
        return this.pages;
    }

    this.getStatus = function() {
        return this.status;
    }
}


function Populate() {
    if (firstSubmit != false) {
        arrayBooks.push(new Book("O Conde de Monte Cristo", " Alexandre Dumas", 300, "read"));
        arrayBooks.push(new Book("Fahrenheit 451", " Ray Bradbury", 300, "read"));
        arrayBooks.push(new Book("Madame Bovary", " Gustave Flaubert", 300, "read"));
        arrayBooks.push(new Book("A Insustentável Leveza do Ser", "Milan Kundera", 300, "read"));
    }

}