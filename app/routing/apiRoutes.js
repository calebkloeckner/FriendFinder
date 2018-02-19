var evilLeaders = require("../data/evilLeaders");
console.log(evilLeaders);

module.exports = function (app) {


  app.get("/api/evilLeaders", function (req, res) {
    res.json(evilLeaders);
  });

  app.post("/api/evilLeaders", function (req, res) {
    console.log("poo");

    console.log(req.body);
    var newEvilLeader = {
      name: "",
      photo: "",
      description: "",
      originalDifference: 1000,

    }
    var userData = req.body;
    var userScores = userData.score;
    var totalScores = [];
    var totalDifference = 0;
    var difference = 0;
    for (let i = 0; i < evilLeaders.length; i++) {
      totalDifference = 0;

      console.log(evilLeaders[i]);
      for (let k = 0; k < evilLeaders[i].score.length; k++) {
        // adding the absolute value between each score to the difference
        totalDifference += Math.abs(+userScores[k] - +evilLeaders[i].score[k]);
        console.log("-------", totalDifference);
      }
      // if the current difference is less than current totalDifference
      if (totalDifference <= newEvilLeader.originalDifference) {
        newEvilLeader.name = evilLeaders[i].name;
        newEvilLeader.photo = evilLeaders[i].photo;
        newEvilLeader.description = evilLeaders[i].description;
        newEvilLeader.originalDifference = totalDifference;
        console.log("===========", newEvilLeader);
      } else {
        console.log("Not the new evil leader");
      }
    
    };

    res.send(newEvilLeader);
    

    console.log("You", req.body);
    // console.log(evilLeaders);
  });
};