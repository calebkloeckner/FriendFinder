
var evilLeaders = require("../data/evilLeaders");
console.log(evilLeaders);

module.exports = function(app) {
 

  app.get("/api/evilLeaders", function(req, res) {
    res.json(evilLeaders);
  });

  app.post("/api/evilLeaders", function(req, res) {
  

console.log(req.body);
var newEvilLeader = {
  name: "",
  photo: "",
  description: ""
}
var userData = req.body;
var userScores = userData.score;
var totalScores = [];
var totalDifference = 0;
var difference = 0;
for(let i = 0; i < evilLeaders.length; i++) {
    totalDifference = 0;

    console.log(evilLeaders[i]);
    for (let k = 0; k < evilLeaders[i].score.length; k++) {
        // adding the absolute value between each score to the difference
       totalDifference += Math.abs(parseInt(userScores[k]) - parseInt(evilLeaders.score[k]))

    }
    // if the current difference is less than current totalDifference
    if(totalDifference <= newEvilLeader){
      newEvilLeader.name = evilLeaders[i].name;
      newEvilLeader.photo = evilLeaders[i].photo;
      newEvilLeader.description = evilLeaders[i].description;
      console.log(newEvilLeader);
    };
};

//newArray of scoreTotals
//loop through array and compare to your score total (var difference = your total score - scoreTotal(convert to positive number))

res.send(newEvilLeader);



      console.log("score", req.body.score);
      console.log(evilLeaders);
    });
  };
