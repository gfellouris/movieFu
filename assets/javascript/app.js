// Begin


$(document).ready(function () {
  
      // Firebase config object
      // This is provided by firebase
      const config = {
        apiKey: "AIzaSyBgIqpE1oOVhsUM8ZfkGS90A0jNCL3ZGfg",
        authDomain: "authentication-practice-42535.firebaseapp.com",
        databaseURL: "https://authentication-practice-42535.firebaseio.com",
        projectId: "authentication-practice-42535",
        storageBucket: "",
        messagingSenderId: "468395106756",
        appId: "1:468395106756:web:522f875bb7f6bd30"
      };
      // INITIALIZE FIREBASE AUTH
      firebase.initializeApp(config);
      console.log(firebase);
      // choosing Google Auth Provider to use in firebase auth settings
      // assigning white listed domains where it is allowed (ex: localhost)
      const provider = new firebase.auth.GoogleAuthProvider();
      const auth = firebase.auth();
    
      // Login Button click event listener and associated 'login' function
      // When log-in is clicked, it changes the button's associated data to 'log-out' stuff
      $(document).on('click', '.log-in', function () {
        login(provider, isLoggedIn);
        $(this).removeClass('log-in')
          .addClass('log-out')
          .html('Logout');
      });
    
      // Logout Button listener and function
      $(document).on('click', '.log-out', function () {
        auth.signOut().then(() => {
          $(this).removeClass('log-out')
            .addClass('log-in')
            .html('Login With Google');
          isLoggedOut();
        }).catch((error) => {
          if (error) throw error
        });
      });
    
      // Using an arrow function to handle the firebase auth function
      const login = (provider, isLoggedIn) => {
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
          // tells firebase to make the user to authenticate using the selected providers (GoogleAuth in this case)
    
          auth.signInWithPopup(provider).then((result) => {
            // the promise function then returns an object of the user's info
            // (ex: email, name, gmail avatar img)
            // google handles all password security/encryption 
            const user = result.user;
            console.log(user)
            // runs a 'isLoggedIn' function if authentication is successful
            isLoggedIn(user);
    
          }).catch((error) => {
            // If google returns an error, this code logs those errors for reference
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            if (error) {
              console.log(errorCode)
              console.log(errorMessage)
            }
          });
        })
      }
    
      // Functions that handle what happens after a user logs in or out
      const isLoggedIn = user => {
        //DO SOMETHING
        var x = document.getElementById("container-body");
        $("#user").text("User: " + user.displayName)
        x.style.visibility = "visible";
       
        
      }
    
      const isLoggedOut = () => {
        //DO SOMETHING
        $("#user").empty()
        var x = document.getElementById("container-body");
        x.style.visibility = "hidden";
      }
    
    
    
    
    
      // When button "GO" is clicked.......
      $("#movieSubmit").on("click", function (event) {
            event.preventDefault();
    
        // Pull text from search box
        var searchParam = $("#movieSearch").val().trim();
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
        }).then(function(data) {
          console.log("UTELLY RESPONSE")
            console.log(data);
            console.log("=================================")
        // });
    
        // Referencing a link to an example of a UTELLY AJAX response rather then making calls to save $$
        // This will always return data for the movie "Interstellar"
        // Remove before final deployment
        // $.getJSON("https://api.myjson.com/bins/173e67", function (data) {
        //   console.log(data);
        //   console.log(data.results[0].locations[0].length);         

        var tableBody = $("#infoBoxes");
        tableBody.empty();
        for(i = 0; i < data.results[0].locations.length; i++){
          // Create new table row
          var newRow = $("<tr>");
          // create new cell
          var locationDiv = $("<td>");
          // save location info
          var location = data.results[0].locations[i].display_name;
          // Save location info to locationDiv
          
          if (location === "Netflix"){
            var locationLogo = $("<img>").attr("src", "/assets/images/netflix.png")
            locationLogo.attr("width", "75px");
            locationLogo.attr("height", "auto");
            locationDiv.append(locationLogo);
          }
          else if (location === "iTunes"){
            var locationLogo = $("<img>").attr("src", "/assets/images/itunes.png")
            locationLogo.attr("width", "75px");
            locationLogo.attr("height", "auto");
            locationDiv.append(locationLogo);
          }
          else if (location === "Amazon Prime"){
            var locationLogo = $("<img>").attr("src", "/assets/images/amazon_prime_logo.png")
            locationLogo.attr("width", "75px");
            locationLogo.attr("height", "auto");
            locationDiv.append(locationLogo);
          }
          else{
            locationDiv.text(location);
          }

          // save URL info
          var urlDIV = $("<td>");
          var url = data.results[0].locations[i].url;
          var urlLink = $("<a>").attr("href", url)
          urlLink.attr("target", "_blank");
          urlLink.text(location);
          urlDIV.append(urlLink);

          newRow.append(locationDiv);
          newRow.append(urlDIV);
          tableBody.append(newRow);
        }
    });
    
    
        // AJAX call for OMDB
        $.ajax({
          url: "https://www.omdbapi.com/?t=" + searchParam + "&y=&plot=short&apikey=trilogy",
          method: "GET"
        }).then(function (omdbResponse) {
          console.log(omdbResponse);
          
          var omdbDiv = $("#poster")
          // Creates Varible poster to hold the poster img retrieved from omdb API
            var poster = omdbResponse.Poster
            var image = $("<img>").attr("src", poster);
          // Appends poster image to omdb Div
            omdbDiv.html(image);


          // For Grabbing Movie Details - OMDB API Reponse Needed

// Grabs omddAPI response.Title and appends it to #title div
      var title =  omdbResponse.Title
      $("#title").html("Title: " + title);
// Grabs omddAPI response.Released and appends it to #relased div
      var released = omdbResponse.Released
      $("#released").html("Released: " + released);
//  Grabs omddAPI response.Rated and appends it to #rated div
      var rated = omdbResponse.Rated
      $("#rated").html("Rating: " + rated);
//  Grabs omddAPI response.Runtime and appends it to #runtime div     
      var runtime = omdbResponse.Runtime
      $("#runtime").html("Run Time: " + runtime);
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
