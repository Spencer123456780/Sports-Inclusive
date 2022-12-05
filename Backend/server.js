import express, { json } from 'express';
const app = express();
import axios from 'axios';
const PORT = process.env.PORT || 5000;
import cors from 'cors';
import fs from 'fs';
import _ from 'underscore';
import { exit } from 'process';

app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


var exists = fs.existsSync('dataset.json');
if(exists) {
  console.log("loading into the users data");
  var data = fs.readFileSync('dataset.json', 'utf8');
  obj = JSON.parse(data);
} else {
  console.log("Creating new data storage")
  var obj = {user:[]};
};


app.post('/newuser', (req, res) => {
  console.log(req.body.Firstname)
  const Firstname = req.body.Firstname
  const Lastname = req.body.Lastname
  const Email = req.body.Email
  const Password = req.body.Password
  const rs = {Firstname, Lastname, Email, Password}
  
  console.log(JSON.stringify(rs))
  
  if(!rs.Email || !rs.Firstname || !rs.Lastname){
    let outcome = {
      info:"Please fill in all catogories or confirm that passwords are matching"
    }
    res.send(outcome);
  }
  else{
    obj.user.push({
      Firstname:req.body.Firstname,
      Lastname:req.body.Lastname,
      Email:req.body.Email,
      Password:req.body.Password
    });
    let data = JSON.stringify(obj, null, 2);
    fs.writeFile('dataset.json', data, confirm);
    function confirm(err)
            {         
            let outcome={
                name:req.body.fname,
                status:"success",
                info:` :Data is recived thank you  ${Firstname}`
             }
             res.send(outcome);
             console.log(outcome);
          }
     }
});



app.get('/signin/:Email', (req, res) =>{
  const file_location = './dataset.json';
  if (fs.existsSync(file_location)){
    if(_.isEmpty(obj)){
      res.send("There is no user information try again")
    }else{
      var data = fs.readFileSync('dataset.json', 'utf8');
      obj = JSON.parse(data);
      var matchingData = {};
      var val = req.params.Email;
      matchingData = [];
      for(var i = 0, l = obj.user.length; i < l; i++){
        var myObj = obj.user[i].Email;
        if(val === myObj){
          let reply = {
            name: req.params.Email
          }
          matchingData.push(reply);
          console.log(JSON.stringify(matchingData) + "is the matching data");
        }
      }
      res.send(matchingData);
    }
  }else{
    res.send("No matching user");
  }
});



let teamsNHL, teamsNFL, teamsNBA;
let scheduleNHL, scheduleNFL, scheduleNBA;
//============== NHL =====================

//NHL Teams api call
const options1 = {
  method: 'GET',
  url: 'https://datacrunch.9c9media.ca/statsapi/sports/hockey/leagues/nhl/competitors?brand=tsn&type=json',
  headers: { 'content-encoding': 'gzip', 'content-type': 'application/json' }
};
axios.request(options1).then(function (response) {
  // console.log(response.data)
  teamsNHL = response.data
  teamsNHL = teamNHLStats()
}).catch(function (error) {
  console.error(error);
});


//NHL Schedule api call
const options = {
  method: 'GET',
  url: 'https://datacrunch.9c9media.ca/statsapi/sports/hockey/leagues/nhl/schedule/competitors/175?brand=tsn&type=json',
  headers: { 'content-encoding': 'gzip', 'content-type': 'application/json' }
};
axios.request(options).then(function (response) {
  scheduleNHL = response.data.events
    let randomName2 = nextNHLGame();
    console.log(randomName2)
    console.log(teamsNHL)
}).catch(function (error) {
    console.error(error);
});

//NHL Teams Function
function teamNHLStats() {
  return teamsNHL.map(tnhl => {
    return {
      id: tnhl.competitorId,
      teamName: tnhl.name,
      teamPoints: tnhl.points,
      teamOverall: tnhl.recordOverall,
      teamConference: tnhl.conferenceName,
      teamDivision: tnhl.divisionName,
      teamPlacement: tnhl.place
    }
  })
};


//NHL Schedule function
function nextNHLGame() {
  let hasHappened =  scheduleNHL.filter(game => game.status === 'Pre-Game').slice(0,3)
  return hasHappened.map(hnhl => {
    return{
      gameDate: hnhl.date,
      gameHome: teamsNHL.find(tnhl => tnhl.id === hnhl.homeCompetitorId).teamName,
      gameAway: teamsNHL.find(tnhl => tnhl.id === hnhl.awayCompetitorId).teamName
    }
  })
};


//============= NFL ====================

//NFL team api call
const options2 = {
  method: 'GET',
  url: 'https://datacrunch.9c9media.ca/statsapi/sports/football/leagues/nfl/competitors?brand=tsn&type=json',
  headers: { 'content-encoding': 'gzip', 'content-type': 'application/json' }
};
axios.request(options2).then(function (response) {
  // console.log(response.data)
  teamsNFL = response.data
  teamsNFL = teamNFLStats()
}).catch(function (error) {
  console.error(error);
});


//NFL Schedule api call
const options3 = {
  method: 'GET',
  url: 'https://datacrunch.9c9media.ca/statsapi/sports/football/leagues/nfl/schedule/competitors/317?brand=tsn&type=json',
  headers: { 'content-encoding': 'gzip', 'content-type': 'application/json' }
};
axios.request(options3).then(function (response) {
  scheduleNFL = response.data.events
    let randomName3 = nextNFLGame();
    console.log(randomName3)
    console.log(teamsNFL)
}).catch(function (error) {
    console.error(error);
});

//NFL Teams Function
function teamNFLStats() {
  return teamsNFL.map(tnfl => {
    return {
      id: tnfl.competitorId,
      teamName: tnfl.name,
      teamOverall: tnfl.recordOverall,
      teamConference: tnfl.conferenceName,
      teamDivision: tnfl.divisionName,
      teamPlacement: tnfl.place
    }
  })
};

//NFL Schedule function
function nextNFLGame() {
  let hasHappened =  scheduleNFL.filter(game => game.status === 'Pre-Game').slice(0,3)
  return hasHappened.map(hnfl => {
    return{
      gameDate: hnfl.date,
      gameHome: teamsNFL.find(tnfl => tnfl.id === hnfl.homeCompetitorId).teamName,
      gameAway: teamsNFL.find(tnfl => tnfl.id === hnfl.awayCompetitorId).teamName
    }
  })
};


//============= NBA ====================

//NBA team api call
const options4 = {
  method: 'GET',
  url: 'https://datacrunch.9c9media.ca/statsapi/sports/basketball/leagues/nba/competitors?brand=tsn&type=json',
  headers: { 'content-encoding': 'gzip', 'content-type': 'application/json' }
};
axios.request(options4).then(function (response) {
  // console.log(response.data)
  teamsNBA = response.data
  teamsNBA = teamNBAStats()
}).catch(function (error) {
  console.error(error);
});


//NBA Schedule api call
const options5 = {
  method: 'GET',
  url: 'https://datacrunch.9c9media.ca/statsapi/sports/basketball/leagues/nba/schedule/competitors/270?brand=tsn&type=json',
  headers: { 'content-encoding': 'gzip', 'content-type': 'application/json' }
};
axios.request(options5).then(function (response) {
  scheduleNBA = response.data.events
    let randomName4 = nextNBAGame();
    console.log(randomName4)
    console.log(teamsNBA)
}).catch(function (error) {
    console.error(error);
});

//NBA Teams Function
function teamNBAStats() {
  return teamsNBA.map(tnba => {
    return {
      id: tnba.competitorId,
      teamName: tnba.name,
      teamOverall: tnba.recordOverall,
      teamConference: tnba.conferenceName,
      teamDivision: tnba.divisionName,
      teamPlacement: tnba.place
    }
  })
};

//NBA Schedule function
function nextNBAGame() {
  let hasHappened =  scheduleNBA.filter(game => game.status === 'Pre-Game').slice(0,3)
  return hasHappened.map(hnba => {
    return{
      gameDate: hnba.date,
      gameHome: teamsNBA.find(tnba => tnba.id === hnba.homeCompetitorId).teamName,
      gameAway: teamsNBA.find(tnba => tnba.id === hnba.awayCompetitorId).teamName
    }
  })
};

