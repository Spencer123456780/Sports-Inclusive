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
}


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
                info:` :Data is recived thank you  ${firstname}`
             }
             res.send(outcome);
             console.log(outcome);
          }
     }
});









/*
app.get('/search/:FirstName', (req, res) =>{

  const file_location ='./dataset.json';
  if(fs.existsSync(file_location)){
    if(.isEmpty(obj)) {
      res.send("There is no user with that information")
    } else {
      var data = fs.readFileSync('dataset.json', 'utf8');
      obj = JSON.parse(data);
      var matchingData ={};
      var val = req.params.Email;
      matchingData = []
      for (var i = 0, l = obj.user.length; i < l; i++){
        var myobj = obj.user[i].Email;
        if(val === myobj){
          let reply = {
            email:req.params.email,
            firstName:obj.user[i].Firstname,
            lastName:obj.user[i].Lastname,
            password:obj.user[i].Password,
          }
          matchingData.push(reply);
          console.log(JSON.stringify(matchingData) + "This is the data found");
        }
        }
        var rese={
          success:true,
          code:200,
          profile:matchingdata
        };                
        res.send(matchingdata);
      }
  }else{
    var rese={success:false,code:404, data:"No matching data found"};                
    res.send(rese);
  }
})
*/
















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


//NHL Schedule function
function nextNHLGame() {
  let hasHappened =  scheduleNHL.filter(game => game.status === 'Pre-Game').slice(0,3)
  return hasHappened.map(h => {
    return{
      gameDate: h.date,
      gameHome: teamsNHL.find(t => t.id === h.homeCompetitorId).teamName,
      gameAway: teamsNHL.find(t => t.id === h.awayCompetitorId).teamName
    }
  })
}

//NHL Teams Function
function teamNHLStats() {
  return teamsNHL.map(t => {
    return {
      id: t.competitorId,
      teamName: t.name,
      teamPoints: t.points,
      teamOverall: t.recordOverall,
      teamConference: t.conferenceName,
      teamDivision: t.divisionName,
      teamPlacement: t.place
    }
  })
}


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
  return teamsNFL.map(t => {
    return {
      id: t.competitorId,
      teamName: t.name,
      teamOverall: t.recordOverall,
      teamConference: t.conferenceName,
      teamDivision: t.divisionName,
      teamPlacement: t.place
    }
  })
}

//NFL Schedule function
function nextNFLGame() {
  let hasHappened =  scheduleNFL.filter(game => game.status === 'Pre-Game').slice(0,3)
  return hasHappened.map(h => {
    return{
      gameDate: h.date,
      gameHome: teamsNFL.find(t => t.id === h.homeCompetitorId).teamName,
      gameAway: teamsNFL.find(t => t.id === h.awayCompetitorId).teamName
    }
  })
}


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
  return teamsNBA.map(t => {
    return {
      id: t.competitorId,
      teamName: t.name,
      teamOverall: t.recordOverall,
      teamConference: t.conferenceName,
      teamDivision: t.divisionName,
      teamPlacement: t.place
    }
  })
}

//NBA Schedule function
function nextNBAGame() {
  let hasHappened =  scheduleNBA.filter(game => game.status === 'Pre-Game').slice(0,3)
  return hasHappened.map(h => {
    return{
      gameDate: h.date,
      gameHome: teamsNBA.find(t => t.id === h.homeCompetitorId).teamName,
      gameAway: teamsNBA.find(t => t.id === h.awayCompetitorId).teamName
    }
  })
}

