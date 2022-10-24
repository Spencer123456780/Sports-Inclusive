import React from 'react';
import { Link } from "react-router-dom";

const NHLPlayers = () => {
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

            <div id = "NHL-Right-Top5">
                <h5 id = "NHL-Top-Players">Top Players</h5>
                <table>
                    <tr>
                        <th>Player</th>
                        <th>G</th>
                        <th>A</th>
                        <th>P</th>
                    </tr>
                    <tr>
                        <td>K.Kadri</td>
                        <td>2</td>
                        <td>4</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>R.Andersson</td>
                        <td>1</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>T.Toffoli</td>
                        <td>3</td>
                        <td>2</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>M.Stone</td>
                        <td>1</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>J.Huberdeau</td>
                        <td>0</td>
                        <td>4</td>
                        <td>4</td>
                    </tr>
                </table>
                <div id = "NHL-Bottom-News1">
                    <h4  id = "NHL-Title2">Flames Goals VS Boston</h4>
                    <div id = "NHL-Left-News"></div>
                    <div id = "NHL-Tag-Box1">
                        <p id = "NHL-Tag">#NHL</p>
                        <p id = "NHL-Tag">#Calgary Flames</p>
                    </div>
                </div>            
            </div>
                
            <div id = "NHL-Right-Topplay">
                <div id = "NHL-Player-Top">
                    <p id = "NHL-Player-Mini">CGY Points Leader</p>
                    <h4 id = "NHL-Player-Name">Nazam Kadri | C | #91</h4>
                    <p id = "NHL-Player-Mini1">2022-2023 Regular Season</p>
                    <div id = "NHL-Box-Set">
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">GP</h4>
                            <p id = "NHL-Amount">5</p>
                        </div>
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">G</h4>
                            <p id = "NHL-Amount">2</p>
                        </div>
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">A</h4>
                            <p id = "NHL-Amount">4</p>
                        </div>
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">P</h4>
                            <p id = "NHL-Amount">6</p>
                        </div>
                    </div>
                </div>

                <div id = "NHL-Player-Top">
                    <p id = "NHL-Player-Mini">CGY Goal Leader</p>
                    <h4 id = "NHL-Player-Name">Tyler Toffoli | RW | #73</h4>
                    <p id = "NHL-Player-Mini1">2022-2023 Regular Season</p>
                    <div id = "NHL-Box-Set">
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">GP</h4>
                            <p id = "NHL-Amount">5</p>
                        </div>
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">G</h4>
                            <p id = "NHL-Amount">3</p>
                        </div>
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">A</h4>
                            <p id = "NHL-Amount">2</p>
                        </div>
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">P</h4>
                            <p id = "NHL-Amount">5</p>
                        </div>
                    </div>
                </div>

                <div id = "NHL-Player-Top">
                    <p id = "NHL-Player-Mini">CGY Points Leader</p>
                    <h4 id = "NHL-Player-Name">Rasmus Andersson | D | #4</h4>
                    <p id = "NHL-Player-Mini1">2022-2023 Regular Season</p>
                    <div id = "NHL-Box-Set">
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">GP</h4>
                            <p id = "NHL-Amount">5</p>
                        </div>
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">G</h4>
                            <p id = "NHL-Amount">1</p>
                        </div>
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">A</h4>                                
                            <p id = "NHL-Amount">5</p>
                        </div>
                        <div id = "NHL-Box">
                            <h4 id = "NHL-Title-Amount">P</h4>
                            <p id = "NHL-Amount">6</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
     
    export default NHLPlayers;