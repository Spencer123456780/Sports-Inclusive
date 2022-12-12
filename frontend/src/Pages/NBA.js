import React from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import NBAIntro from '../img/NBAIntro.webp';
import { useState } from "react";
import { useEffect } from 'react';

const NBALanding = () => {
    const [GameData, setGameData] = useState([]);
    let dynamicNBA = 181;


    useEffect(() => {
        const fetchData = async ()=> {
            const response = await fetch(`https://datacrunch.9c9media.ca/statsapi/sports/basketball/leagues/nba/schedule/competitors/${dynamicNBA}?/brand=tsn&type=json`);
            const newData = await response.json();
            console.log(newData);
        };
        fetchData();
    }, [])

    function handleChange(event) {
        const team = event.target.value;
        if(team === "Select Your Team") return;
        Axios.post('http://localhost:5000/selectedNBATeam', {teamId: team})
        .then((responce) => {
            //Game 1
            console.log(responce.data[0].gameDate); 
            console.log(responce.data[0].gameVenue);
            console.log(responce.data[0].gameHome);
            console.log(responce.data[0].gameAway);
            //Game 2
            console.log(responce.data[1].gameDate); 
            console.log(responce.data[1].gameVenue);
            console.log(responce.data[1].gameHome);
            console.log(responce.data[1].gameAway);
            //Game 3
            console.log(responce.data[2].gameDate); 
            console.log(responce.data[2].gameVenue);
            console.log(responce.data[2].gameHome);
            console.log(responce.data[2].gameAway);
            setGameData(responce.data);

        })
        console.log(event.target.value)
    }

    const optionsNBA = [
        { id: 'Miami Heat', value: 273},
        { id: "Dallas Mavericks", value: 274 },
        { id: "Minnesota Timberwolves", value: 276 },
        { id: "Washington Wizards", value: 256 },
        { id: "Golden State Warriors", value: 271 },
        { id: "Houston Rockets", value: 257 },
        { id: "Los Angeles Lakers", value: 278 },
        { id: "San Antonio Spurs", value: 279 },
        { id: "Cleveland Cavaliers", value: 259 },
        { id: "Denver Nuggets", value: 267 },
        { id: "New York Knicks", value: 251 },
        { id: "Charlotte Hornets", value: 260 },
        { id: "Oklahoma City Thunder", value: 280 },
        { id: "Los Angeles Clippers", value: 277 },
        { id: "Philadelphia 76ers", value: 253},
        { id: "Portland Trail Blazers", value: 275 },
        { id: "Utah Jaz", value: 269 },
        { id: "Brooklyn Nets", value: 252 },
        { id: "Phoenix Suns", value: 268 },
        { id: "Toronto Raptors", value: 254 },
        { id: "Orlando Magic", value: 262 },
        { id: "New Orleans Pelicans", value: 264 },
        { id: "Atlanta Hawks", value: 270 },
        { id: "Chicago Bulls", value: 263 },
        { id: "Memphis Grizzlies", value: 272 },
        { id: "Sacramento Kings", value: 281 },
        { id: "Boston Celtics", value: 255 },
        { id: "Detroit Pistons", value: 265 },
        { id: "Milwaukee Bucks", value: 261 },
        { id: "Indiana Pacers", value: 266 },
    ];



    return (
       <div>
            <div id = "NHL-Left">
                <h4  id = "NHL-Title">Introduction</h4>
                <div>
                    <img src={NBAIntro} id = "NHL-Left-News"></img>
                </div>
                <div id = "NHL-Left-Text">
                    <p>The National Basketball Association is a professional basketball league in North America. The league is composed of 30 teams and is one of the major professional sports leagues in the United States and Canada. It is the premier men's professional basketball league in the world.</p>
                </div>
                <div id = "NHL-Tag-Box">
                    <p id = "NHL-Tag">#NBA</p>
                </div>
                <h5 id = "NHL-Bottom-Text">#NBA LIFE</h5>
            </div>


            <div id = "NFL-Right">
                <form>
                    <div id='NFL-Inputs'>
                        <label id = "NFL-Title1"> NFL Teams:
                            <select onChange={handleChange}>
                                <option alue = "Select Your Team">--------- Pick Team ---------</option>
                                    {optionsNBA.map(Team => (
                                    <option value = {Team.value} key={Team.value}>{Team.id}</option>
                                    )
                                )}
                            </select>
                        </label>
                    </div>
                </form>


                
                
                <div>
                    <h2 id='NFLNext3GamesTitle'>Next 3 games In Order</h2>
                </div>
                
                <div id='NFLGameInfoBox'>

                    <div id='NFLGameTimesTitle'>
                        <h4 id='GameTimeRed'>Game Time:</h4>
                        <div>
                           
                            <p id='NFLGameTimes'>
                                {GameData.map(Team => (
                                    <p id='ApiInfo' key={Team.id}>{Team.gameTime}</p>
                                )
                                )}
                            </p>
                        </div>
                    </div>

                    <div id='NFLGameLocationTitle'>
                        <h4 id='GameLocationRed'>Game Location:</h4>
                        <div>
                            <p id='NFLGamesLocation'>
                                {GameData.map(Team => (
                                    <p id='ApiInfo' key={Team.id}>{Team.gameVenue}</p>
                                )
                                )}          
                            </p>
                        </div>
                    </div>

                    <div id='NFLHomeTeamTitle'>
                        <h4 id='HomeTeamRed'>Home Team:</h4>
                        <div>
                            {/* Game Home Team */}
                            <p id='NFLHomeTeam'>
                                {GameData.map(Team => (
                                        //Displays the team name from the API
                                        //Name is the property name or colomn name
                                    <p id='ApiInfo' key={Team.id}>{Team.gameHome}</p>
                                )
                                )}
                            </p>
                        </div>
                    </div>
                    
                    <div id='NFLAwayTeamTitle'>
                        <h4 id='AwayTeamRed'>Away Team:</h4>
                        <div>
                            {/* //Away Team */}
                            <p id = 'NFLAwayTeam'>
                                {GameData.map(Team => (
                                    <p id='ApiInfo' key={Team.id}>{Team.gameAway}</p>
                                )
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>   
       </div>
    );
}
export default NBALanding;