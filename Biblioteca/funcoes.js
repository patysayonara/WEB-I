$(document).ready(function() {
    
    $('form').submit(function() {
        //arrayBooks.push(new Book(document.getElementById('title').value,document.getElementById('author').value,document.getElementById('pages').value,document.getElementById('status').value));
        titulos.push(document.getElementById("title"));
        
        autores.push(document.getElementById("author"));
        paginas.push(document.getElementById("pages"));
      });

    
    $("#title").focusout(function(){
         titlo = $("#title").val();
         alert(titlo);
         t =JSON.stringify( $("#title").value())
         localStorage.setItem("titulo",t);
     });

    

    $('#changeStatus').click(function(){
        if($(this).text() == 'Read'){
            $(this).html('Unread');
            //Modificar no objeto
        } else {
            $(this).html('Read');
            //Modificar no objeto
        }
    });

    fillTable();
    
    $('#deleteCol').click(function(){
        //Modificar no objeto
        deleteBook();
    });

    $('#returnButton').click(function(){
        window.location.href = 'index.html';
    });

    $("#atualizar").click(function(){
        var t = localStorage.getItem("titulo");
        var n = j + t;
        alert(n);
        localStorage.removeItem("titulo");
       });
    

     function fillTable(){
        
        
        for(var i = 0; i <titulos.length; i++){
        
            $("#rows").append("<td>"+titulos[i]+"</td>");
            
            // <td id='titleCol'></td>
            // <td id='authorCol'></td>
            // <td id='pagesCol'></td>
            // <td id='statusCol'><button type='button' id='changeStatus'>Read</button></td>
            // <td id='deleteCol'><b>Delete</b></td>
            // document.getElementById('titleCol').value = arrayBooks[i].getTitle();
            // document.getElementById('authorCol').value = arrayBooks[i].getAuthor();
            // document.getElementById('pagesCol').value = arrayBooks[i].getPages();
            // document.getElementById('statusCol').value = arrayBooks[i].getStatus();
        }
    
    
    }

      


});

var j ="patricia";
var titulos = ["a orfa"];
var autores = ["julia"];
var paginas = [111];
var titlo;

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