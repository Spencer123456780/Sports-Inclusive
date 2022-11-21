import React from 'react';
import { Link } from "react-router-dom";

const NHL = () => {
    return (
       <div>
            <div id = "NHL-Left">
                <h4  id = "NHL-Title">Highlights</h4>
                <div id = "NHL-Left-News">

                </div>
                <div id = "NHL-Left-Text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia. Vitae elementum curabitur vitae nunc. Non tellus orci ac auctor augue. Eu consequat ac felis donec et odio pellentesque diam. Pharetra et ultrices neque ornare aenean.</p>
                </div>
                <div id = "NHL-Tag-Box">
                    <p id = "NHL-Tag">#NHL</p>
                    <p id = "NHL-Tag">#Calgary Flames</p>
                </div>
                <h5 id = "NHL-Bottom-Text">See More NHL</h5>
            </div>


            <div id = "NHL-Right">
                <form>
                    <div id='NHL-Inputs'>
                        <label id = "NHL-Title1"> My NFL Teams
                            <select>
                                <option>Anaheim Ducks</option>
                                <option>Boston Bruins</option>
                                <option>Calgary Flames</option>
                                <option>Colorado Avalanche</option>
                                <option>Los Angeles Kings</option>
                                <option>Montreal Canadians</option>
                                <option>New York Rangers</option>
                                <option>Pittsburgh Penguins</option>
                                <option>Toronto Maple Leafs</option>
                                <option>Vegas Golden Knights</option>
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