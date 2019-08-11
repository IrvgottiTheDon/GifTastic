//javascript, jQuery

var xhr = $.get("https://api.giphy.com/v1/gifs/search?api_key=Z4AgULFMGctT1JzJ14D7hWtktVj9HaWq&q=dog&limit=10&offset=0&rating=G&lang=en");
xhr.done(function(data) { console.log("success got data", data); });