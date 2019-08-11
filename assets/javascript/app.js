//javascript, jQuery
var queryData;
var queryLimit = 10;
var topics=[];


function searchGiphy(query)  {
    event.preventDefault(); // prevent form submit from refreshing page
    document.getElementById("searchContent").innerHTML = ""; //Clear out current search results if any.
    document.getElementById("topics").innerHTML = ""; //Clear out topics array before printing new array
    

    var api_key = "Z4AgULFMGctT1JzJ14D7hWtktVj9HaWq";
    var searchQuery = "https://api.giphy.com/v1/gifs/search?";
    var offset = "0";
    var rating = "G";
    var lang = "en";
    
    
    //add the query to the topics array
    topics.push (query);
    for (var i=0;i<topics.length;i++){

        //add a button for the query added to the topics array
        document.getElementById("topics").innerHTML += '<button onclick=\"searchGiphy(\''+topics[i]+'\')\">'+topics[i]+'</button>';
        
        // Check and remove duplicates
        topics = Array.from(new Set(topics));

    }


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
            document.getElementById("searchContent").innerHTML += '<div class="object"><p class="rating">Rating: '+queryData.data[i].rating+'</p><img class="gif" src=' + queryData.data[i].images.original_still.url+'data-state="still data-still='+queryData.data[i].images.original_still.url+' data-animate='+queryData.data[i].images.original.url+'/>';
        }

        $(".gif").on("click", function() {
          // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
          var state = $(this).attr("data-state");
          // If the clicked image's state is still, update its src attribute to what its data-animate value is.
          // Then, set the image's data-state to animate
          // Else set src to the data-still value
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });

    });
}