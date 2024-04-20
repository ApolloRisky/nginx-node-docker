const os = require("os");
const redis = require("redis");
const express = require("express");

const app = express();
const redisClient = redis.createClient({
  host: "redis",
  port: 6379,
});

app.get("/", (req, res) => {
  redisClient.get("numVisits", (err, visits) => {
    numVisitsToDisplay = parseInt(visits) + 1;
    if (isNaN(numVisitsToDisplay)) {
      numVisitsToDisplay = 1;
    }
    res.send(os.hostname() + ": Number of visits is: " + numVisitsToDisplay);
    visits++;
    redisClient.set("numVisits", visits);
  });
});

app.listen(5050, function () {
  console.log("Web app is listening on port 5050");
});
