/*global $*/
$.ajax({
    url:"https://www.googleapis.com/books/v1/volumes?q=harry%20potter",
    method: "GET",
    success:function(response){
        $("#im").append("<a href=\" \"><img id=\"first\" class=\"bimg\" src=" + response.items[0].volumeInfo.imageLinks.smallThumbnail + "></a>" + "<h2>" +response.items[0].volumeInfo.title + "    </h2>" + "<p><strong>Authors: "+ response.items[0]            .volumeInfo.authors +"</strong><br />" + response          .items[0].volumeInfo.publishedDate + "<br />"+ response.items[0].volumeInfo.description +"</p>" );
        
        $("#im").append("<a href=\" \"><img id=\"second\" class=\"bimg\" src=" + response.items[1].volumeInfo.imageLinks.smallThumbnail + "></a>" + "<h2>" +response.items[1].volumeInfo.title + "    </h2>" + "<p><strong>Authors: "+ response.items[1].volumeInfo.authors +"</strong><br />" + response.items[1].volumeInfo.publishedDate + "<br />"+ response.items[1].volumeInfo.description +"</p>");
        
        $("#im").append("<a href=\" \"><img id=\"third\" class=\"bimg\" src=" + response.items[2].volumeInfo.imageLinks.smallThumbnail + "></a>" + "<h2>" +response.items[2].volumeInfo.title + "    </h2>" + "<p><strong>Authors: "+ response.items[2].volumeInfo.authors +"</strong><br />" + response.items[2].volumeInfo.publishedDate + "<br />"+ response.items[2].volumeInfo.description +"</p>");
        
        $("#im").append("<a href=\" \"><img id=\"fourth\" class=\"bimg\" src=" + response.items[3].volumeInfo.imageLinks.smallThumbnail + "></a>" + "<h2>" +response.items[3].volumeInfo.title + "    </h2>" + "<p><strong>Authors: "+ response.items[3].volumeInfo.authors +"</strong><br />" + response.items[3].volumeInfo.publishedDate + "<br />"+ response.items[3].volumeInfo.description +"</p>");
        
        $("#im").append("<a href=\" \"><img id=\"fifth\" class=\"bimg\" src=" + response.items[4].volumeInfo.imageLinks.smallThumbnail + "></a>" + "<h2>" +response.items[4].volumeInfo.title + "    </h2>" + "<p><strong>Authors: "+ response.items[4].volumeInfo.authors +"</strong><br />" + response.items[4].volumeInfo.publishedDate + "<br />"+ response.items[4].volumeInfo.description +"</p>");
        
        $("#im").append("<a href=\" \"><img id=\"sixth\" class=\"bimg\" src=" + response.items[5].volumeInfo.imageLinks.smallThumbnail + "></a>" + "<h2>" +response.items[5].volumeInfo.title + "    </h2>" + "<p><strong>Authors: "+ response.items[5].volumeInfo.authors +"</strong><br />" + response.items[5].volumeInfo.publishedDate + "<br />"+ response.items[5].volumeInfo.description +"</p>");
        
        $("#im").append("<a href=\" \"><img id=\"seventh\" class=\"bimg\" src=" + response.items[6].volumeInfo.imageLinks.smallThumbnail + "></a>" + "<h2>" +response.items[6].volumeInfo.title + "    </h2>" + "<p><strong>Authors: "+ response.items[6].volumeInfo.authors +"</strong><br />" + response.items[6].volumeInfo.publishedDate + "<br />"+ response.items[6].volumeInfo.description +"</p>");
        
        $("#im").append("<a href=\" \"><img id=\"eighth\" class=\"bimg\" src=" + response.items[7].volumeInfo.imageLinks.smallThumbnail + "></a>" + "<h2>" +response.items[7].volumeInfo.title + "    </h2>" + "<p><strong>Authors: "+ response.items[7].volumeInfo.authors +"</strong><br />" + response.items[7].volumeInfo.publishedDate + "<br />"+ response.items[7].volumeInfo.description +"</p>");
        
        $("#im").append("<a href=\" \"><img id=\"ninth\" class=\"bimg\" src=" + response.items[8].volumeInfo.imageLinks.smallThumbnail + "></a>" + "<h2>" +response.items[8].volumeInfo.title + "    </h2>" + "<p><strong>Authors: "+ response.items[8].volumeInfo.authors +"</strong><br />" + response.items[8].volumeInfo.publishedDate + "<br />"+ response.items[8].volumeInfo.description +"</p>");
        
        $("#im").append("<a href=\" \"><img id=\"tenth\" class=\"bimg\" src=" + response.items[9].volumeInfo.imageLinks.smallThumbnail + "></a>" + "<h2>" +response.items[9].volumeInfo.title + "    </h2>" + "<p><strong>Authors: "+ response.items[9].volumeInfo.authors +"</strong><br />" + response.items[9].volumeInfo.publishedDate + "<br />"+ response.items[9].volumeInfo.description +"</p>");
        
        
        
        
        
       
    },
});


   /* $.ajax({
        url:"https://www.googleapis.com/books/v1/volumes?q=harry%20potter",
        method: "GET",
        success:function(resp){
            
            $("#first").click(function(){

                $("#info").html("<h2>" +resp.items[0].volumeInfo.title + "    </h2>" + "<p><strong>Authors:"+ resp.items[0]            .volumeInfo.authors +"</strong><br />" + resp          .items[0].volumeInfo.publishedDate + "<br />"+ resp    .items[0].volumeInfo.description +"</p>");
            });
        
        },
    });*/













/*function changeItem(){
    var item;
    var image = document.getElementByClass("myImage");
    if(image.id.match("first")){
        //$("#first").click(function(){
            item= "item[0]"
        //});
    }
}*/



/*"<div>"<img class=\"bimg\" scr="*//*"</div>"*/