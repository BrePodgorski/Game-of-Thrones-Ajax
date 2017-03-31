$(document).ready(function(){

  $(document).on('click' , 'img' , function() {

    var x = $(this).attr('id')
    $.get("http://anapioficeandfire.com/api/houses/"+x, function(res){
        console.log(res);

        var html_str="";
        html_str += "<h4>Name:</h4>";
        html_str += res.name;
        html_str += "<h4>Words:</h4>";
        html_str += res.words;
        html_str += "<h4>Titles:</h4>";
        html_str += res.titles;
        console.log(html_str);


        $(".middlediv").html(html_str);

        return false;



      },  "json");

    });


  return false;


});
