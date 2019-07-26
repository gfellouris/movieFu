# MovieFu

### This project was created as a part of our Rutgers Bootcamp team building training. It demonstrates the knowledge, skills and abilities that our team acquired over the course of our four week training camp. MovieFu is a tool that allows users to watch a wide range of award-winning T.V. shows, movies, documentaries and more through different streaming providers such as Netflix, Hulu, FIO's, Amazon and many more. 

#### Description of MovieFu

_MovieFu is a finder. The website interacts with complex API's to give users an simple way to find and enjoy a  movie, t.v. show etc of their choice. This is an important feature to have while searching for something good to watch during your free time. The websites helps manage different streaming providers inventory quickly.  MovieFu provides users with the access to locating enertainment quickly instead of searching each providers inventory one by one._

## ***Code Explaination:*** 

Usage: If used correctly your search should look someting like https://imgur.com/a/Ro7x2SI
If you search for another movie or tv show it will overwrite your previous search.

Favicon - Added unique web icon that appears on the tab in the browser. Will distinguish the the tab even further from others


BootStrap Elements:

Font Awesome - Font Awesome is a font and icon toolkit based on CSS and LESS it is incorporated with Bootstrap

Gridwork - Using Bootstrap css library the index.html is set up in a grid system with minor css elements added to further improve the look of the ui on the website.

Bootstrap Overview:
<div class="card-body">

<table class="table table-dark table-hover"> - Assigns a dark background to the tablet and hover shows what item your cursor is currently over.

<strong><i class="fas fa-ticket-alt faTitleFont"></i> Movie/TV Provider</strong> - 

<nav class="navbar"> - Setting up a nav bar

<span class="navbar-text text-white mr-4 p-0" id="user"></span> - Changes navbar text to white

<button class="btn btn-danger text-center log-in">Login with Google</button> Danger is a red button class from bootstrap, and log in s to definite what that button is doing.


Google Fonts - Used to further decorate the fonts used throughout the website to fit the theme.

<link href="https://fonts.googleapis.com/css?family=Bubblegum+Sans&display=swap" rel="stylesheet">

<link href="https://fonts.googleapis.com/css?family=Leckerli+One&display=swap" rel="stylesheet">

Firebase - Used to authenticate the user before using the search tool. Site is co



Favicon - Added unique web icon that appears on the tab in the browser. Will distinguish the the tab even further from others

Support: Contact one of the many contributers to this project (George Fellouris, Eric Thiel, Kristen Sherman, Gergory Manco)

Roadmap: If further developed further API functionality maybe to even include If its able to be rented , how much it cost to buy or if a subscription is needed.




#### Key API's used:
*_UTELLI_: For the utelly API we were only allowed to make 1000 free calls. After that they would have charged $0.01 per call. To avoid hitting this limit we saved a response from Utelly for “Interstellar” as a JSON file. This file was saved to http://myjson.com/ so it could be referenced during development instead of making AJAX calls. Once development was complete, we re-added the Utelly ajax call and removed the static json reference.*

## FireBase

_Firebase used configurations objects:

* apiKey
* authDomain  
* databaseURL
* projectId  
* storageBucket
* messagingSenderId
* appId
                                      
                                      
                                     
                                     
_Initital Firebase authentication: 

* Choosing Google Auth Provider to use in firebase auth settings
* Assigning white listed domains where it is allowed (ex: localhost) 
* Login Button click event listener and associated 'login' function
* When log-in is clicked, it changes the button's associated data to 'log-out' stuff
* Adding a logout Button listener and function
* Using an arrow function to handle the firebase auth function in this case)
* tells firebase to make the user to authenticate using the selected providers (GoogleAuth                                      * The promise function then returns an object of the user's info
* (ex: email, name, gmail avatar img)
* google handles all password security/encryption 
* runs a 'isLoggedIn' function if authentication is successful
* If google returns an error, this code logs those errors for reference
* Handle Errors here.
* Functions that handle what happens after a user logs in or out (Makes login and log out                                       visiable for users
* When button "GO" is clicked.......
* Pull text from search box_

## AJAX

#### AJAX CALLS:
 AJAX CALL FOR UTELLY API:
 
 * Leave commented during development to reduce amount of calls made
 * Referencing a link to an example of a UTELLY AJAX response rather then making calls to save $$
 * This will always return data for the movie "Interstellar"
 * Remove before final deployment
 * $.getJSON("https://api.myjson.com/bins/173e67", function (data) {
 * console.log(data);
 * console.log(data.results[0].locations[0].length);         
 * Create new table row
 * create new cell
 * save location info
 * Save location info to locationDiv
 * save URL info
         
 
 AJAX call for OMDB:
 
 * Creates Varible poster to hold the poster img retrieved from omdb API
 * Appends poster image to omdb Div
 * For Grabbing Movie Details - OMDB API Reponse Needed
 * Grabs omddAPI response.Title and appends it to #title div
 * Grabs omddAPI response.Released and appends it to #relased diV  
 * Grabs omddAPI response.Rated and appends it to #rated diV  
 * Grabs omddAPI response.Runtime and appends it to #runtime div         
 * Grabs omdbAPI response.Genre and appends it to #genre div
 * Referencing a JSON example of an OMDB AJAX response
 * Just in case OMDB's API isn't working 
 * Will always return data for "Interstellar"
 * Remove before final deployment
 * $.getJSON("https://api.myjson.com/bins/1g31en", function(data) {
 * console.log(data); 
 * console.log("json name: " + data.name);
       

#### Debugging methods

## UI

#### For Bootstrap styling

## Links
__Click on link to opne website__

https://imgur.com/a/Ro7x2SI - automatic!
[imgur](http://imgur.com)



