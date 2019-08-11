//javascript, jQuery
var queryData;
var queryLimit = 10;


function searchGiphy()  {
    event.preventDefault(); // prevent form submit from refreshing page
    

    var api_key = "Z4AgULFMGctT1JzJ14D7hWtktVj9HaWq";
    var searchQuery = "https://api.giphy.com/v1/gifs/search?";
    var offset = "0";
    var rating = "G";
    var lang = "en";
    var query = $('#queryInput').val();


    searchQuery += "api_key="+ api_key;
    searchQuery += "&q=" + query;
    searchQuery += "&limit=" + queryLimit;
    searchQuery += "&offset=" + offset;
    searchQuery += "&rating=" + rating;
    searchQuery += "&lang=" + lang;

    // var xhr = $.get("https://api.giphy.com/v1/gifs/search?api_key=Z4AgULFMGctT1JzJ14D7hWtktVj9HaWq&q=dog&limit=10&offset=0&rating=G&lang=en");
    
    console.log (searchQuery);
    var xhr = $.get(searchQuery);

    xhr.done(function (data) {
        console.log("success got data", data);
        queryData = data;

        for (var i = 0; i < queryLimit; i++) {
            document.getElementById("searchContent").innerHTML += '<img src=' + queryData.data[i].images.original.url + '/>';
        }


    });
}