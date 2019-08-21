var path = require("path");
let friends = require("./../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var theUser = req.body;
        //this returns users name, photo link, and scores.

        var theUserScores = theUser.scores;
        // console.log("friends[i].scores[j]", friends[i].scores[j]);
        //returns the users results
        var userResults = theUserScores.map(function(x) {
            return parseInt(x, 10);
        });

        let differenceOfScores = 0;
        let differenceArray = [];
        let newArray = [];

        //so I want to loop through the user scores and friends scores and subtract as it loops, and save the new numbers. The closest friend is the new best friend
        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < theUser.scores.length; j++) {
                differenceOfScores = Math.abs(theUser.scores[j].charAt(0) - friends[i].scores[j]);
                // console.log("friends[i].scores[j]", friends[i].scores[j]);
                // console.log("theUser.scores[i]", theUser.scores[i].charAt(0));
                // console.log("difference of scores", differenceOfScores)

                differenceArray.push(differenceOfScores);
                var reduction = differenceArray.reduce((a, b) => a + b, 0)

            }
            newArray.push(reduction)
        }
        let finalScores = [];
        var firstScore = newArray[0];
        var secondScore = newArray[1] - newArray[0];
        var thirdScore = newArray[2] - newArray[1];
        var fourthScore = newArray[3] - newArray[2];
        var fifthScore = newArray[4] - newArray[3];
        finalScores.push(firstScore, secondScore, thirdScore, fourthScore, fifthScore);
        console.log(finalScores);


        //Gets the smallest score and it's placement in the friends array
        var bestFriend = "";
        var index = 0;
        var value = finalScores[0];
        for (var i = 1; i < finalScores.length; i++) {
            if (finalScores[i] < value) {
                value = finalScores[i];
                index = i;
            }
        }
        bestFriend = (friends[index]);
        console.log(bestFriend);
        res.json(bestFriend);
    });
};