import React from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import NHLIntroPic from '../img/NHLIntro.png';
import { useState } from "react";
import { useEffect } from 'react';

const NHL = () => {
    const [GameData, setGameData] = useState([]);
    let dynamicNHL = 181;


    useEffect(() => {
        const fetchData = async ()=> {
            //Gets the response from the backend
            const response = await fetch(`https://datacrunch.9c9media.ca/statsapi/sports/hockey/leagues/nhl/schedule/competitors/${dynamicNHL}?/brand=tsn&type=json`);

            //Sets the Response from the backend to an object called newData
            const newData = await response.json();
            console.log(newData);
        };
        fetchData();
    }, [])

    function handleChange(event) {
        const team = event.target.value;
        if(team === "Select Your Team") return;//Check for "" value
        Axios.post('http://localhost:5000/selectedNHLTeam', {teamId: team})
        .then((responce) => {
            //Game 1
            console.log(responce.data[0].gameDate); //Responce.data
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

    const optionsNHL = [
        { id: 'Anaheim Ducks', value: 181},
        { id: "Arizona Coyotes", value: 180 },
        { id: "Boston Bruins", value: 165 },
        { id: "Buffalo Sabres", value: 171 },
        { id: "Calgary Flames", value: 175 },
        { id: "Carolina Hurricanes", value: 185 },
        { id: "Chicago Blackhawks", value: 183 },
        { id: "Colorado Avalanche", value: 193 },
        { id: "Columbus Blue Jackets", value: 174 },
        { id: "Dallas Stars", value: 179 },
        { id: "Detroit Red Wings", value: 170 },
        { id: "Edmonton Oilers", value: 178 },
        { id: "Florda Panthers", value: 162 },
        { id: "Los Angeles Kings", value: 190 },
        { id: "Minnesota Wild", value: 188 },
        { id: "Montreal Canadiens", value: 169 },
        { id: "Nashville Predators", value: 177 },
        { id: "New Jersey Devils", value: 182 },
        { id: "New York Islanders", value: 184 },
        { id: "New York Rangers", value: 164 },
        { id: "Ottawa Senators", value: 163 },
        { id: "Philadelphia Flyers", value: 167 },
        { id: "Pittsburgh Penguins", value: 168 },
        { id: "San Jose Sharks", value: 189 },
        { id: "Seattle Kraken", value: 42082 },
        { id: "St. Louis Blues", value: 187 },
        { id: "Tampa Bay Lighting", value: 173 },
        { id: "Toronto Maple Leafs", value: 166 },
        { id: "Vancouver Canucks", value: 176 },
        { id: "Vegas Golden Knights", value: 40292 },
        { id: "Washington Capitals", value: 172 },
        { id: "Winnipeg Jets", value: 186 },
    ];



    return (
       <div>
            <div id = "NHL-Left">
                <h4  id = "NHL-Title">Introduction</h4>
                <div>
                    <img src={NHLIntroPic} id = "NHL-Left-News"></img>
                </div>
                <div id = "NHL-Left-Text">
                    <p>Hockey is a winter sport that most people play at somepoint in there life if you grew up in Canada. Unlike most sports hockey can be agressive. The goal of hockey is to put the puck in the enemy teams net will protecting your own. Using nothing but a stick and some blades straped to your feet in order to move.</p>
                </div>
                <div id = "NHL-Tag-Box">
                    <p id = "NHL-Tag">#NHL</p>
                </div>
                <h5 id = "NHL-Bottom-Text">#NHL LIFE</h5>
            </div>


            <div id = "NFL-Right">
                <form>
                    <div id='NFL-Inputs'>
                        <label id = "NFL-Title1"> NFL Teams:
                            <select onChange={handleChange}>
                                <option alue = "Select Your Team">--------- Pick Team ---------</option>
                                    {/* Maping Teamlist to the object */}
                                    {optionsNHL.map(Team => (
                                    //Displays the team name from the API
                                    //Name is the property name or colomn name
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
                            {/* Game Times */}
                            <p id='NFLGameTimes'>
                                {GameData.map(Team => (
                                        //Displays the team name from the API
                                        //Name is the property name or colomn name
                                    <p id='ApiInfo' key={Team.id}>{Team.gameTime}</p>
                                )
                                )}
                            </p>
                        </div>
                    </div>

                    <div id='NFLGameLocationTitle'>
                        <h4 id='GameLocationRed'>Game Location:</h4>
                        <div>
                            {/* Game Location */}
                            <p id='NFLGamesLocation'>
                                {GameData.map(Team => (
                                        //Displays the team name from the API
                                        //Name is the property name or colomn name
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
 
export default NHL;