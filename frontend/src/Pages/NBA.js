import React from 'react';
import { Link } from "react-router-dom";
import '../css/App.css'
import NBAIntroPic from '../img/NBAIntro.webp';

const NbaLanding = () => {
    return(
        <div>
        <div id = "NFL-Left">
            <h4  id = "NFL-Title">Introduction</h4>
            <div>
                <img src={NBAIntroPic} id = "NFL-Left-News"></img>
            </div>
            <div id = "NFL-Left-Text">
                <p>American football is a team sport played by two teams of eleven players
                     on a rectangular field with goalposts at each end. 
                     The offense team attempts to advance down the field by running with the ball or passing it, 
                     while the defense aims to stop the offense's and to take control of the ball for themselves. 
                     The offense must advance at least ten yards in four downs or plays; 
                     if they fail, they turn over the football to the defense, but if they succeed,
                      they are given a new set of four downs to continue the drive. 
                      Points are scored by advancing the ball into the opposing team's end zone
                       for a touchdown or kicking the ball through the opponent's goalposts. 
                       The team with the most points at the end of a game wins.</p>
            </div>
            <div id = "NFL-Tag-Box">
                <p id = "NFL-Tag">#NBA</p>
            </div>
            <h5 id = "NFL-Bottom-Text">#NBA LIFE</h5>
        </div>


        <div id = "NFL-Right">
            <form>
                <div id='NFL-Inputs'>
                    <label id = "NFL-Title1"> My NBA Teams
                        <select>
                            <option>Atlanta Hawks</option>
                            <option>Boston Celtics</option>
                            <option>Brooklyn Nets</option>
                            <option>Charlotte Hornets</option>
                            <option>Chicago Bulls</option>
                            <option>Cleveland Cavaliers</option>
                            <option>Dallas Mavericks</option>
                            <option>Denver Nuggets</option>
                            <option>Detroit Pistons</option>
                            <option>Golden State Warriors</option>
                            <option>Houston Rockets</option>
                            <option>Indiana Pacers</option>
                            <option>Los Angeles Clippers</option>
                            <option>Los Angeles Lakers</option>
                            <option>Memphis Grizzlies</option>
                            <option>Miami Heat</option>
                            <option>Milwaukee Bucks</option>
                            <option>Minnesota Timberwolves</option>
                            <option>New Orleans Pelicans</option>
                            <option>New York Knicks</option>
                            <option>Oklahoma City Thunder</option>
                            <option>Orlando Magic</option>
                            <option>Philadelphia 76ers</option>
                            <option>Phoenix Suns</option>
                            <option>Portland Trail Blazers</option>
                            <option>Sacramento Kings</option>
                            <option>San Antonio Spurs</option>
                            <option>Toronto Raptors</option>
                            <option>Utah Jazz</option>
                            <option>Washinton Wizards</option>
                        </select>
                    </label>
                </div>
            </form>
            <div className='NFL-Team-Player-Links'>
                <Link className = "toTeam">Teams </Link>
                <Link className = "toPlayer"> Players</Link>
            </div>
            <div id = "NFL-Right-Scoreboard">
                <div id = "NFL-Right-Game">
                    <p id = "NFL-Score-Text-Top">October 27th</p>
                    <p id = "NFL-Score-Text-Top">2:00pm</p>
                    <div id = "NFL-Game-Score">
                        <div id = "NFL-Game-Left">
                            <h1>0</h1>
                            <p id = "NFL-Score-Text">Calgary Flames</p>
                        </div>
                        <h1>-</h1>
                        <div id = "NFL-Score-Right">
                            <h1>0</h1>
                            <p id = "NFL-Score-Text">Buffalo Sabers</p>
                        </div>
                    </div>
                </div>

                <div id = "NFL-Right-Game">
                    <p id = "NFL-Score-Text-Top">October 30th</p>
                    <p id = "NFL-Score-Text-Top">8:00pm</p>
                    <div id = "NFL-Game-Score">
                        <div id = "NFL-Game-Left">
                            <h1>0</h1>
                            <p id = "NFL-Score-Text">Calgary Flames</p>
                        </div>
                        <h1>-</h1>
                        <div id = "NFL-Score-Right">
                            <h1>0</h1>
                            <p id = "NFL-Score-Text">Toronto Maple Leafs</p>
                        </div>
                    </div>
                </div>

                <div id = "NFL-Right-Game">
                    <p id = "NFL-Score-Text-Top">October 30th</p>
                    <p id = "NFL-Score-Text-Top">8:00pm</p>
                    <div id = "NFL-Game-Score">
                        <div id = "NFL-Game-Left">
                            <h1>0</h1>
                            <p id = "NFL-Score-Text">Calgary Flames</p>
                        </div>
                        <h1>-</h1>
                        <div id = "NFL-Score-Right">
                            <h1>0</h1>
                            <p id = "NFL-Score-Text">Toronto Maple Leafs</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id = "NFL-Right-Table">
                <div id = "NFL-Table-West">
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

                <div id = "NFL-Table-East">
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
                <div id = "NFL-Bottom-News">
                    <h4  id = "NFL-Title2"></h4>
                    <div id = "NFL-Left-News"></div>
                    </div>
                    <div id = "NFL-Tag-Box1">
                        <p id = "NFL-Tag">#NBA</p>
                    </div>
                </div>
            </div>
        </div>
   </div>
    )
}
export default NbaLanding