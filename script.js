/*global $*/
$.ajax({
    url:"https://www.googleapis.com/books/v1/volumes?q=harry%20potter",
    method: "GET",
    success:function(response){
        $("#im").append("<a href=\" \"><img class=\"bimg\" src=" + response.items[0].volumeInfo.imageLinks.smallThumbnail + "></a>" );
        $("#im").append("<a href=\" \"><img class=\"bimg\" src=" + response.items[1].volumeInfo.imageLinks.smallThumbnail + "></a>" );
        $("#im").append("<a href=\" \"><img class=\"bimg\" src=" + response.items[2].volumeInfo.imageLinks.smallThumbnail + "></a>" );
        $("#im").append("<a href=\" \"><img class=\"bimg\" src=" + response.items[3].volumeInfo.imageLinks.smallThumbnail + "></a>" );
        $("#im").append("<a href=\" \"><img class=\"bimg\" src=" + response.items[4].volumeInfo.imageLinks.smallThumbnail + "></a>" );
        $("#im").append("<a href=\" \"><img class=\"bimg\" src=" + response.items[5].volumeInfo.imageLinks.smallThumbnail + "></a>" );
        $("#im").append("<a href=\" \"><img class=\"bimg\" src=" + response.items[6].volumeInfo.imageLinks.smallThumbnail + "></a>" );
        $("#im").append("<a href=\" \"><img class=\"bimg\" src=" + response.items[7].volumeInfo.imageLinks.smallThumbnail + "></a>" );
        $("#im").append("<a href=\" \"><img class=\"bimg\" src=" + response.items[8].volumeInfo.imageLinks.smallThumbnail + "></a>" );
        $("#im").append("<a href=\" \"><img class=\"bimg\" src=" + response.items[9].volumeInfo.imageLinks.smallThumbnail + "></a>" );
    },
});

/*"<div>"<img class=\"bimg\" scr="*//*"</div>"*/