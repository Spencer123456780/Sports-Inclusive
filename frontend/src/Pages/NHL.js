import React from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import NHLIntroPic from '../img/NHLIntro.png';
import { useState } from "react";
import { useEffect } from 'react';

const NHL = () => {

    let dynamicNHL = 181;

    const [TeamList, setTeamList] = useState([{}])


    useEffect(() => {
        const fetchData = async ()=> {
            //Gets the response from the backend
            const response = await fetch(`https://datacrunch.9c9media.ca/statsapi/sports/hockey/leagues/nhl/schedule/competitors/${dynamicNHL}?/brand=tsn&type=json`);

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
        Axios.post('http://localhost:5000/selectedNHLTeam', {teamId: team})
        .then((responce) => {
            console.log(responce.data[0].gameAway); //Responce.data

            //Fill spaces here

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


            <div id = "NHL-Right">
                <form>
                    <div id='NHL-Inputs'>
                        <label id = "NHL-Title1"> My NL Teams
                            <select onChange={handleChange}>
                                <option value = "Select Your Team">Select Your Team</option>
                                {optionsNHL.map(Team => (
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
 
export default NHL;