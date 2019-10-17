$(document).ready(function() {
    
    $("form").submit(function(event) {
        event.preventDefault();
        arrayBooks.push(new Book($("#title").val(),$("#author").val(),$("#pages").val(),$("#status").val()));
        alert(arrayBooks.length);
        fillTable();
    });

    $(".changeStatus").click(function(){
        if($(this).text() == "Read"){
            $(this).html("Unread");
            //Modificar no objeto
        } else {
            $(this).html("Read");
            //Modificar no objeto
        }
    });
    
    $(".deleteCol").click(function(){
        //Modificar no objeto
        deleteBook();
    });

    //$('#returnButton').click(function(){
    //    window.location.href = 'index.html';
    //});

    function fillTable(){
        for(var i = 0; i <arrayBooks.length; i++){
            $("tbody").append("<tr>");
            $("tbody").append("<td>"+arrayBooks[i].getTitle()+"</td>");
            $("tbody").append("<td>"+arrayBooks[i].getAuthor()+"</td>");
            $("tbody").append("<td>"+arrayBooks[i].getPages()+"</td>");
            $("tbody").append("<td><button type='button' class='changeStatus'>"+arrayBooks[i].getStatus()+"</button></td>");
            $("tbody").append("<td style='color:rgb(172, 0, 0)'><b>Delete</b></td>");
            $("tbody").append("</tr>");
        }
     }
});

var arrayBooks = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.getTitle = function(){
        return this.title;
    }

    this.getAuthor = function(){
        return this.author;
    }

    this.getPages = function(){
        return this.pages;
    }

    this.getStatus = function(){
        return this.status;
    }
}

function deleteBook(){
    //Encontrar posição do objeto
    arrayBooks.split(pos,1);
}