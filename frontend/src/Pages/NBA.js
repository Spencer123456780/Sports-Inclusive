import React from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import NBAIntro from '../img/NBAIntro.webp';
import { useState } from "react";
import { useEffect } from 'react';

const NBALanding = () => {
    const [GameData, setGameData] = useState([]);

    let dynamicNBA = 181;

    const [TeamList, setTeamList] = useState([{}])


    useEffect(() => {
        const fetchData = async ()=> {
            //Gets the response from the backend
            const response = await fetch(`https://datacrunch.9c9media.ca/statsapi/sports/basketball/leagues/nba/schedule/competitors/${dynamicNBA}?/brand=tsn&type=json`);

            //Sets the Response from the backend to an object called newData
            const newData = await response.json();
            setTeamList(newData);
            console.log(newData);
        };
        fetchData();
    }, [])

    function handleChange(event) {
        const team = event.target.value;
        if(team === "Select Your Team") return;//Check for "" value
        Axios.post('http://localhost:5000/selectedNBATeam', {teamId: team})
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
            //Fill spaces here

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
                    <p>Hockey is a winter sport that most people play at somepoint in there life if you grew up in Canada. Unlike most sports hockey can be agressive. The goal of hockey is to put the puck in the enemy teams net will protecting your own. Using nothing but a stick and some blades straped to your feet in order to move.</p>
                </div>
                <div id = "NHL-Tag-Box">
                    <p id = "NHL-Tag">#NHL</p>
                </div>
                <h5 id = "NHL-Bottom-Text">#NHL LIFE</h5>
            </div>


            <div id = "NHL-Right">
                <form>
                    <div id='NHL-Inputs'>
                        <label id = "NHL-Title1"> My NL Teams
                            <select onChange={handleChange}>
                                <option value = "Select Your Team">Select Your Team</option>
                                {optionsNBA.map(Team => (
                                    //Displays the team name from the API
                                    <option value = {Team.value} key={Team.value}>{Team.id}</option>
                                    )
                                )}
                            </select>
                        </label>
                    </div>
                </form>
                <div className='NHL-Team-Player-Links'>
                    <Link to = "/NHL" className = "toTeam">Teams</Link>
                    <Link to = "/NHLplayers" className = "toPlayer">Players</Link>
                </div>
                <div id = "NHL-Right-Scoreboard">
                    <div id = "NHL-Right-Game">
                        <p id = "NHL-Score-Text-Top">October 27th</p>
                        <p id = "NHL-Score-Text-Top">2:00pm</p>
                        <div id = "NHL-Game-Score">
                            <div id = "NHL-Game-Left">
                                <h1>0</h1>
                                <p id = "NHL-Score-Text">Calgary Flames</p>
                            </div>
                            <h1>-</h1>
                            <div id = "NHL-Score-Right">
                                <h1>0</h1>
                                <p id = "NHL-Score-Text">Buffalo Sabers</p>
                            </div>
                        </div>
                    </div>

                    <div id = "NHL-Right-Game">
                        <p id = "NHL-Score-Text-Top">October 30th</p>
                        <p id = "NHL-Score-Text-Top">8:00pm</p>
                        <div id = "NHL-Game-Score">
                            <div id = "NHL-Game-Left">
                                <h1>0</h1>
                                <p id = "NHL-Score-Text">Calgary Flames</p>
                            </div>
                            <h1>-</h1>
                            <div id = "NHL-Score-Right">
                                <h1>0</h1>
                                <p id = "NHL-Score-Text">Toronto Maple Leafs</p>
                            </div>
                        </div>
                    </div>

                    <div id = "NHL-Right-Game">
                        <p id = "NHL-Score-Text-Top">October 30th</p>
                        <p id = "NHL-Score-Text-Top">8:00pm</p>
                        <div id = "NHL-Game-Score">
                            <div id = "NHL-Game-Left">
                                <h1>0</h1>
                                <p id = "NHL-Score-Text">Calgary Flames</p>
                            </div>
                            <h1>-</h1>
                            <div id = "NHL-Score-Right">
                                <h1>0</h1>
                                <p id = "NHL-Score-Text">Toronto Maple Leafs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id = "NHL-Right-Table">
                    <div id = "NHL-Table-West">
                        <h5>Western Confrence</h5>
                        <table>
                            <tr>
                                <th>Team</th>
                                <th>W</th>
                                <th>L</th>
                                <th>P</th>
                            </tr>
                            <tr>
                                <td>Anaheim Ducks</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Calgary Flames</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Colorado Avalanche</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Los Angeles Kings</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Vegas Golden Knights</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>

                    <div id = "NHL-Table-East">
                        <h5>Eastern Confrence</h5>
                        <table>
                            <tr>
                                <th>Team</th>
                                <th>W</th>
                                <th>L</th>
                                <th>P</th>
                            </tr>
                            <tr>
                                <td>Boston Bruins</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Montreal Canadians</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>New York Rangers</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Pittsburgh Penguins</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Toronto Maple Leafs</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    
                    <div >
                    <div id = "NHL-Bottom-News">
                        <h4  id = "NHL-Title2">Flames Goals VS Boston</h4>
                        <div id = "NHL-Left-News"></div>
                        </div>
                        <div id = "NHL-Tag-Box1">
                            <p id = "NHL-Tag">#NHL</p>
                            <p id = "NHL-Tag">#Calgary Flames</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}
export default NBALanding;