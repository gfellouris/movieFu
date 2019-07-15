// Begin


$(document).ready(function () {

  // When button "GO" is clicked.......
  $("#GO").on("click", function (letsGOOO) {

    // Pull text from search box
    var searchParam = $("#search-box").val().trim();
    console.log(searchParam);



  // AJAX CALLS

    // AJAX CALL FOR UTELLY API
    // Leave commented during development to reduce amount of calls made
    // $.ajax({
    //   url: "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + searchParam + "&country=us",
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    //     "X-RapidAPI-Key": "d6bd752cddmshce9fab663c6a442p1574b2jsncf974a1b4d76",  
    //   }
    // }).then(function(utellyResponse) {
    //   console.log("UTELLY RESPONSE")
    //     console.log(utellyResponse);
    //     console.log("=================================")
    // });

    // Referencing a link to an example of a UTELLY AJAX response rather then making calls to save $$
    // This will always return data for the movie "Interstellar"
    // Remove before final deployment
    $.getJSON("https://api.myjson.com/bins/173e67", function (data) {
      console.log(data);
      $("#UtellyAPI").text(data.results[0].id);
      console.log(data.results[0].locations[0].display_name)
      $("#UtellyAPI").text(data.results[0].id);
      console.log(data.results[0].locations[1].display_name)
    });


    // AJAX call for OMDB
    $.ajax({
      url: "https://www.omdbapi.com/?t=" + searchParam + "&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function (omdbResponse) {
      console.log(omdbResponse);
    // Creates Variable omdbDIV to a new div that will append to omdbAPI
      var omdbDiv = $("<div class='movie-details'>")
    // Creates Varible poster to hold the poster img retrieved from omdb API
      var poster = omdbResponse.Poster
      var image = $("<img>").attr("src", poster);
    // Appends poster image to omdb Div
      omdbDiv.append(image);


      var title = omdbResponse.Title
      var released = omdbResponse.Released
      var rated = omdbResponse.Rated
      var runtime = omdbResponse.Runtime
      var genre = omdbResponse.Genre
      omdbDiv.append("Title: " +  title)
      omdbDiv.append("Released: " + released)
      omdbDiv.append("Rateing: " + rated)
      omdbDiv.append("Runtime: " + runtime)
      omdbDiv.append("Genre: " + genre)
      console.log("Title: " + omdbResponse.Title)
      console.log("Released: " + omdbResponse.Released)
      console.log("Rated: " + omdbResponse.Rated)
      console.log("Run Time: " + omdbResponse.Runtime)
      console.log("Genre: " + omdbResponse.Genre)
      $("#omdbAPI").append(omdbDiv)
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