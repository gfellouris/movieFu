// Begin


$(document).ready(function () {

  // When button "GO" is clicked.......
  $("#GO").on("click", function () {

    // Pull text from search box
    var searchParam = $("#search-box").val().trim();
    console.log(searchParam);



  // AJAX CALLS

    // AJAX CALL FOR UTELLY API
    // Leave commented during development to reduce amount of calls made
    $.ajax({
      url: "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + searchParam + "&country=us",
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "d6bd752cddmshce9fab663c6a442p1574b2jsncf974a1b4d76",  
      }
    }).then(function(utellyResponse) {
      console.log("UTELLY RESPONSE")
        console.log(utellyResponse);
        console.log("=================================")
    });

    // Referencing a link to an example of a UTELLY AJAX response rather then making calls to save $$
    // This will always return data for the movie "Interstellar"
    // Remove before final deployment
    $.getJSON("https://api.myjson.com/bins/173e67", function (data) {
      console.log(data);
    });


    // AJAX call for OMDB
    $.ajax({
      url: "https://www.omdbapi.com/?t=" + searchParam + "&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function (omdbResponse) {
      console.log(omdbResponse);
    });

    // Referencing a JSON example of an OMDB AJAX response
    // Just in case OMDB's API isn't working 
    // Will always return data for "Interstellar"
    // Remove before final deployment
    // $.getJSON("https://api.myjson.com/bins/1g31en", function(data) {
    //   console.log(data); 
    //   console.log("json name: " + data.name);
    // });
    //  ============================================================================================


  });

});