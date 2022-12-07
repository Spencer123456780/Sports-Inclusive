import React, {useState, useEffect}from 'react';
//import { Link } from "react-router-dom";
import NFLIntroPic from '../img/NFLIntro.png';



const NFL = () => {
    const [TeamList, setTeamList] = useState([]);
    const [GameTime, setGameTime] = useState();
    const [GameLocation, setGameLocation] = useState();
    const [HomeTeam, setHomeTeam] = useState();
    const [AwayTeam, setAwayTeam] = useState ();

    useEffect(() => {
        const fetchData = async ()=> {
            //Gets the response from the backend
            const response = await fetch(``);
            //Sets the Response from the backend to an object called newData
            const newData = await response.json();
            setTeamList(newData);
            console.log(newData);
        };
        fetchData();
    }, [])

    const handelChange = () =>{
        
    }


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
                            <select value={TeamList}>
                                <option>--------- Pick Team ---------</option>
                                {/* Maping Teamlist to the object */}
                                {TeamList.map(data => (
                                    //Displays the team name from the API
                                    //Name is the property name or colomn name
                                    <option value={data.id} key={data.id}>{data.name}</option>
                                ))}
                                {/*<option id='Arizona-Cardinals' >Arizona Cardinals</option>
                                <option id='Baltimore-Ravens'>Baltimore Ravens</option>
                                <option id='Atlanta-Falcons'>Atlanta Falcons</option>
                                <option id='Buffalo-Bills'>Buffalo Bills</option>
                                <option id='Carolina-Panthers'>Carolina Panthers</option>
                                <option id='Cincinnati-Bengals'>Cincinnati Bengals</option>
                                <option id='Chicago-Bears'>Chicago Bears</option>
                                <option id='Cleveland-Browns'>Cleveland Browns</option>
                                <option id='Dallas-Cowboys'>Dallas Cowboys</option>
                                <option id='Denver-Broncos'>Denver Broncos</option>
                                <option id='Detroit-Lions'>Detroit Lions</option>
                                <option id='Houston-Texans'>Houston Texans</option>
                                <option id='Green-Bay-Packers'>Green Bay Packers</option>
                                <option id='Indianapolis-Colts'>Indianapolis Colts</option>
                                <option id='Los-Angeles-Rams'>Los Angeles Rams</option>
                                <option id='Jacksonville-Jaguars'>Jacksonville Jaguars</option>
                                <option id='Minnesota-Vikings'>Minnesota Vikings</option>
                                <option id='Kansas-City-Chiefs'>Kansas City Chiefs</option>
                                <option id='New-Orleans-Saints'>New Orleans Saints</option>
                                <option id='Las-Vegas-Raiders'>Las Vegas Raiders</option>
                                <option id='New-York-Giants'>New York Giants</option>
                                <option id='Los-Angeles-Chargers'>Los Angeles Chargers</option>
                                <option id='Philadelphia-Eagles'>Philadelphia Eagles</option>
                                <option id='Miami-Dolphins'>Miami Dolphins</option>
                                <option id='San-Francisco-49ers'>San Francisco 49ers</option>
                                <option id='New-England-Patriots'>New England Patriots</option>
                                <option id='Seattle-Seahawks'>Seattle Seahawks</option>
                                <option id='New-York-Jets'>New York Jets</option>
                                <option id='TampaBay-Buccaneers'>Tampa Bay Buccaneers</option>
                                <option id='Pittsburgh-Steelers'>Pittsburgh Steelers</option>
                                <option id='Washington-Commanders'>Washington Commanders</option>
                                <option id='Tennessee-Titans'>Tennessee Titans</option> */}
                            </select>
                        </label>
                    </div>
                </form>


                
                
                <div>
                    <h2 id='NFLNext3GamesTitle'>Next 3 games</h2>
                </div>
                <div id='NFLGameInfoBox'>
                    <div>
                        <h4 id='NFLGameTimesTitle'>Game Time:</h4>
                    </div>
                    <div>
                        <h4 id='NFLGameLocationTitle'>Game Location:</h4>
                    </div>
                    <div>
                        <h4 id='NFLHomeTeamTitle'>Home Team:</h4>
                    </div>
                    <div>
                        <h4 id='NFLAwayTeamTitle'>Away Team:</h4>
                    </div>
                    <div>
                        <p id='NFLGameTimes'>Game times fo here</p>
                    </div>
                    <div>
                        <p id='NFLGamesLocation'>Game Location Here</p>
                    </div>
                    <div>
                        <p id='NFLHomeTeam'>Home Team Here</p>
                    </div>
                    <div>
                        <p id='NFLAwayTeam'>Away Team Here</p>
                    </div>
                </div>

            </div>
       </div>
    );
}
 
export default NFL;

