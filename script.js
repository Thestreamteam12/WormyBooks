/*global $*/
$.ajax({
    url:"https://www.googleapis.com/books/v1/volumes?q=harry%20potter",
    method: "GET",
    success:function(response){
        $("body").append("<img class=\"bimg\" scr="+ response.items[0].volumeInfo.imageLinks.smallThumbnail +">");
    },
    
});

