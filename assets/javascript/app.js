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
    $("#user").text(`Welcome,`)
    $("#email").text(user.email)
    $(".start").append(`<img src="https://user-images.githubusercontent.com/42519030/54242956-f424a380-44fc-11e9-89e3-76ece045f9ca.jpg"></img>`)
  }

  const isLoggedOut = () => {
    //DO SOMETHING
    $("#user").html(`Goodbye`);
    $(".start, .welcome").empty()
  }





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
      console.log(data.results[0].locations[0].display_name);



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