import React, {useState, useEffect}from 'react';
//import { Link } from "react-router-dom";
import NFLIntroPic from '../img/NFLIntro.png';
import Axios from 'axios';


const NFL = () => {
    const [GameData, setGameData] = useState([]);
    let dynamicNFL = 181;

    useEffect(() => {
        const fetchData = async ()=> {
            //Gets the response from the backend
            const response = await fetch(`https://datacrunch.9c9media.ca/statsapi/sports/hockey/leagues/nhl/schedule/competitors/${dynamicNFL}?/brand=tsn&type=json`);
            //Sets the Response from the backend to an object called newData
            const newData = await response.json();

            console.log(newData);
        };
        fetchData();
    }, [])

    function handleChange(event) {
        const team = event.target.value;
        if(team === "Select Your Team") return;//Check for "" value
        Axios.post('http://localhost:5000/selectedNFLTeam', {teamId: team})
        .then((responce) => {
            //Game 1
            console.log(responce.data);
            console.log("GAME 1 INFO :");
            console.log(responce.data[0].gameDate); 
            console.log(responce.data[0].gameVenue);
            console.log(responce.data[0].gameHome);
            console.log(responce.data[0].gameAway);
            //Game 2
            console.log("GAME 2 INFO :");
            console.log(responce.data[1].gameDate); 
            console.log(responce.data[1].gameVenue);
            console.log(responce.data[1].gameHome);
            console.log(responce.data[1].gameAway);
            //Game 3
            console.log("GAME 3 INFO :");
            console.log(responce.data[2].gameDate); 
            console.log(responce.data[2].gameVenue);
            console.log(responce.data[2].gameHome);
            console.log(responce.data[2].gameAway);
            setGameData(responce.data);
        })
        console.log(event.target.value)
    }

    const optionsNFL = [
        { id: 'Arizona Cardinals', value: 317},
        { id: "Baltimore Ravens", value: 299},
        { id: "Atlanta Falcons", value: 309},
        { id: "Buffalo Bills", value: 296},
        { id: "Carolina Panthers", value: 303},
        { id: "Cincinnati Bengals", value: 322},
        { id: "Chicago Bears", value: 305},
        { id: "Cleveland Browns", value: 316},
        { id: "Dallas Cowboys", value: 291},
        { id: "Denver Broncos", value: 314},
        { id: "Detroit Lions", value: 308},
        { id: "Houston Texans", value: 306},
        { id: "Green Bay Packers", value: 304},
        { id: "Indianapolis Colts", value: 310},
        { id: "Los Angeles Rams", value: 318},
        { id: "Jacksonville Jaguars", value: 294},
        { id: "Minnesota Vikings", value: 312},
        { id: "Kansas City Chiefs", value: 321},
        { id: "New Orleans Saints", value: 311},
        { id: "Las Vegas Raiders", value: 292},
        { id: "New York Giants", value: 297},
        { id: "Los Angeles Chargers", value: 315},
        { id: "Philadelphia Eagles", value: 293},
        { id: "Miami Dolphins", value: 302},
        { id: "San Francisco 49ers", value: 319},
        { id: "New England Patriots", value: 300},
        { id: "Seattle Seahawks", value: 320},
        { id: "New York Jets", value: 301},
        { id: "Tampa Bay Buccaneers", value: 313},
        { id: "Pittsburgh Steelers", value: 298},
        { id: "Washington Commanders", value: 295},
        { id: "Tennessee Titans", value: 307},
    ];

    return (
        <div>
            <div id = "NFL-Left">
                <h4  id = "NFL-Title">Introduction</h4>
                <div>
                    <img src={NFLIntroPic} alt='Not Avalible' id = "NFL-Left-News"></img>
                </div>
                <div id = "NFL-Left-Text">
                    <p> American football is a team sport played by two teams of eleven players
                        on a rectangular field with goalposts at each end. 
                        The offense team attempts to advance down the field by running with the ball or passing it, 
                        while the defense aims to stop the offense's and to take control of the ball for themselves. 
                        The offense must advance at least ten yards in four downs or plays; 
                        if they fail, they turn over the football to the defense, but if they succeed,
                        they are given a new set of four downs to continue the drive. 
                        Points are scored by advancing the ball into the opposing team's end zone
                        for a touchdown or kicking the ball through the opponent's goalposts. 
                        The team with the most points at the end of a game wins.
                    </p>
                </div>
                <div id = "NFL-Tag-Box">
                    <p id = "NFL-Tag">#NFL</p>
                </div>
                <h5 id = "NFL-Bottom-Text">#NFL LIFE</h5>
            </div>


            <div id = "NFL-Right">
                <form>
                    <div id='NFL-Inputs'>
                        <label id = "NFL-Title1"> NFL Teams:
                            <select onChange={handleChange}>
                                <option alue = "Select Your Team">--------- Pick Team ---------</option>
                                    {/* Maping Teamlist to the object */}
                                    {optionsNFL.map(Team => (
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
 
export default NFL;

