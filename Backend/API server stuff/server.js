const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
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

