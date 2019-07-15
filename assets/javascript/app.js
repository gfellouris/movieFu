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


// Currently not working - Grabbing provider div and trying to append icon from utelly api
      var iconDiv = $("#provider1")

      var icon = data.results[0].locations[0].icon
      var iconIMG = $("<img>").attr("src", icon);

      iconDiv.append(iconIMG)

    






      $("#provider1").text(data.results[0].locations[0].display_name);
      console.log( "Steaming Service: " + data.results[0].locations[0].display_name)
      $("#provider2").text(data.results[0].locations[1].display_name);
      console.log(data.results[0].locations[1].display_name)
    });


    // AJAX call for OMDB
    $.ajax({
      url: "https://www.omdbapi.com/?t=" + searchParam + "&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function (omdbResponse) {
      console.log(omdbResponse);
    // Creates Variable omdbDIV to a new div that will append to poster div
      var omdbDiv = $("#poster")
    // Creates Varible poster to hold the poster img retrieved from omdb API
      var poster = omdbResponse.Poster
      var image = $("<img>").attr("src", poster);
    // Appends poster image to omdb Div
      omdbDiv.append(image);

      
        // For Grabbing Movie Details - OMDB API Reponse Needed

// Grabs omddAPI response.Title and appends it to #title div
      var title =  omdbResponse.Title
      $("#title").append("Title: " + title);
// Grabs omddAPI response.Released and appends it to #relased div
      var released = omdbResponse.Released
      $("#released").append("Released: " + released);
//  Grabs omddAPI response.Rated and appends it to #rated div
      var rated = omdbResponse.Rated
      $("#rated").append("Rating: " + rated);
//  Grabs omddAPI response.Runtime and appends it to #runtime div     
      var runtime = omdbResponse.Runtime
      $("#runtime").append("Run Time: " + runtime);
// Grabs omdbAPI response.Genre and appends it to #genre div
//      var genre = omdbResponse.Genre
//      $("#genre") = append("Genre: " + genre);

      console.log("Title: " + title);
      console.log("Released: " + released);
      console.log("Rated: " + rated);
      console.log("Run Time: " + runtime);
//      console.log("Genre: " + genre);
//      $("movie-details").append(omdbDiv)
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