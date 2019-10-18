$(document).ready(function() {

    $("form").submit(function(event) {
        event.preventDefault();
        arrayBooks.push(new Book($("#title").val(), $("#author").val(), $("#pages").val(), $("#status").val()));
        fillTable();
        // Não funcionam ainda
        Populate();
        form.reset();

    });

    // $("button").click(function() {
    //     if ($(this).text() == "Read") {
    //         $(this).html("Unread");
    //     } else {
    //         $(this).html("Read");
    //         //Modificar no objeto
    //     }
    // });

    $(document).on('click', '.changeStatus', function() {
        if ($(this).text() == "Read") {
            $(this).text("Unread");
        } else {
            $(this).text("Read");
            //Modificar no objeto
        }
    });

    $(".deleteCol").click(function() {
        //Modificar no objeto
        deleteBook();
    });


    function fillTable() {
        $("#title").attr("value", "ola");
        var i = arrayBooks.length - 1;
        $("tbody").append("<tr>");
        $("tbody").append("<td>" + arrayBooks[i].getTitle() + "</td>");
        $("tbody").append("<td>" + arrayBooks[i].getAuthor() + "</td>");
        $("tbody").append("<td>" + arrayBooks[i].getPages() + "</td>");
        $("tbody").append("<td><button type='button' class='changeStatus btn btn-outline-info'>" + arrayBooks[i].getStatus() + "</button></td>");
        $("tbody").append("<td><button type='button' class='deleteCol btn btn-outline-danger'>Delete</button></td>");
        $("tbody").append("</tr>");

    }


});

var arrayBooks = [];

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

function deleteBook() {
    //Encontrar posição do objeto
    arrayBooks.split(pos, 1);
}

function Populate() {
    arrayBooks.push(new Book("O Conde de Monte Cristo", " Alexandre Dumas", 300, "read"));
    arrayBooks.push(new Book("Fahrenheit 451", " Ray Bradbury", 300, "read"));
    arrayBooks.push(new Book("Madame Bovary", " Gustave Flaubert", 300, "read"));
    arrayBooks.push(new Book("A Insustentável Leveza do Ser", "Milan Kundera", 300, "read"));

}