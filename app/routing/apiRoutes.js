// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friendsdata.
// ===============================================================================

var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){
// API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res){
  	res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res){
    // Note the code here. Our "server" will respond to requests and let users know their compatible friend
    // It will send back the most compatible friend
    friendsData.push(req.body);
    console.log(req.body);
    //New friend scores
    var newfr_scores = req.body.scores;
    var compFriendsArr = [];


    //Find a compatible friend
    for(var i=0; i<friendsData.length; i++){
    	console.log(friendsData[i].scores);
    	var fr_scores = friendsData[i].scores;
    	var tot = 0;

    	//Loop through the scores and add the absolute difference in scores
    	for(var j=0; j<fr_scores.length; j++){
    		tot += Math.abs(newfr_scores[j] - fr_scores[j]);
    		console.log("newfr_scores:" + newfr_scores[j] + "fr_scores: " + fr_scores[j] + "total " + tot);
    	}

    	compFriendsArr.push({name: friendsData[i].name, photo: friendsData[i].photo, total: tot});
    }

    console.log(compFriendsArr);

    //Find the most compatible friend by sorting the compFriendsArr by total score
    compFriendsArr.sort(function(a,b) {return (a.total > b.total) ? 1 : ((b.total > a.total) ? -1 : 0);} ); 

    console.log("Sorted: \n");

    console.log(compFriendsArr);

    res.send(compFriendsArr[0]);

  });

}