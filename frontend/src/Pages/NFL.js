import React from 'react';
import { Link } from "react-router-dom";
import NFLIntroPic from '../img/NFLIntro.png';

const NFL = () => {
    return (
        <div>
            <div id = "NFL-Left">
                <h4  id = "NFL-Title">Introduction</h4>
                <div>
                    <img src={NFLIntroPic} id = "NFL-Left-News"></img>
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
                    <p id = "NFL-Tag">#NFL</p>
                </div>
                <h5 id = "NFL-Bottom-Text">#NFL LIFE</h5>
            </div>


            <div id = "NFL-Right">
                <form>
                    <div id='NFL-Inputs'>
                        <label id = "NFL-Title1"> My NFL Teams
                            <select>
                                <option>Arizona Cardinals</option>
                                <option>Baltimore Ravens</option>
                                <option>Atlanta Falcons</option>
                                <option>Buffalo Bills</option>
                                <option>Carolina Panthers</option>
                                <option>Cincinnati Bengals</option>
                                <option>Chicago Bears</option>
                                <option>Cleveland Browns</option>
                                <option>Dallas Cowboys</option>
                                <option>Denver Broncos</option>
                                <option>Detroit Lions</option>
                                <option>Houston Texans</option>
                                <option>Green Bay Packers</option>
                                <option>Indianapolis Colts</option>
                                <option>Los Angeles Rams</option>
                                <option>Jacksonville Jaguars</option>
                                <option>Minnesota Vikings</option>
                                <option>Kansas City Chiefs</option>
                                <option>New Orleans Saints</option>
                                <option>Las Vegas Raiders</option>
                                <option>New York Giants</option>
                                <option>Los Angeles Chargers</option>
                                <option>Philadelphia Eagles</option>
                                <option>Miami Dolphins</option>
                                <option>San Francisco 49ers</option>
                                <option>New England Patriots</option>
                                <option>Seattle Seahawks</option>
                                <option>New York Jets</option>
                                <option>Tampa Bay Buccaneers</option>
                                <option>Pittsburgh Steelers</option>
                                <option>Washington Commanders</option>
                                <option>Tennessee Titans</option>
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
                            <p id = "NFL-Tag">#NFL</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}
 
export default NFL;

