// Click Countdown Demo notes

var config = {
	apiKey: "AIzaSyB-YNr_bkbzy0ik81TMvuk9n1NZfted5oA",
	authDomain: "clickcountdown-cla7d.firebaseapp.com",
	databaseURL: "https://clickcountdown-cla7d.firebaseio.com",
	storageBucket: "clickcountdown-cla7d.appsport.com",
};

firebase.initializeApp(config);

var count = 100;

firebase.database().ref().on("value",function(snapshot){
	count = snapshot.val().clicks;
	$("#clickValue").html(count);
})

$("#clickButton").on("click",function({
	count--;
	firebase.database().ref().set({
		clicks:count
	});
})
$("#restartButton").on("click",function(){
	firebase.database().ref().set({
		clicks:100
	});
})

/* Most Recent User DEMO
HTML: <script src="https://www.gstatic.com/firebasejs/4.6.0/firebase.js"></script>
*/
 var config = {
    apiKey: "AIzaSyBv97WyiV_PvX4d1k-71J2y9-4yQg5nSso",
    authDomain: "mostrecentuser-demo.firebaseapp.com",
    databaseURL: "https://mostrecentuser-demo.firebaseio.com",
    projectId: "mostrecentuser-demo",
    storageBucket: "",
    messagingSenderId: "206528902669"
  };
  firebase.initializeApp(config);

 /*
 OBJECTIVES DAY 1
 - Data Persistance
 	- cover different ways to store date on client
 	- the client is the web browser
 	- build web app that uses local storage
 	- functions need to be testable
 	- side effects: you're worst nightmare when debugging code. Put your side effects in one place
 		in one place so you can track them. Don't have too many.
 	- Look at NYT Article Search and how you can improve the code
 	- Types of Storage:
 		- local storage is an object [key value pairs], indexed db you can query and search it,
 		 session storage is key value also --very very very similar to local storage,
 		 Web SQL, Cookies
 - Project
 	- Jenni is the git master
 	- do commits with actual content or else you will get a 0!

