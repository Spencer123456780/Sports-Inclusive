import React from 'react';
import { Link } from "react-router-dom";



const NFL = () => {
    return (
       <div>
            <h1 id='NFLTitle'>NFL</h1>
            
            <div id='NFLInlayed'>
                <div id='NFLInfo'>
                    <h3>Weekly Highlights</h3>
                    <div id='NFLVideoBox'>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h3>NFL Videos</h3>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>   

                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt.</p>
                </div>

                
                <div id='NFLTeamsPlayers'>
                    <h2 id='Spaceingz'>Teams | <Link to={'/NFLPlayers'}>Players</Link></h2>
                    <form>
                        <div id='NFLSpaceingz'>
                            <label> NFL Teams
                                <select>
                                    <option>Atlanta Falcons</option>
                                    <option>Buffalo Bills</option>
                                    <option>Cleveland Browns </option>
                                    <option>Jacksonville Jaguars</option>
                                    <option>Kansas City Chiefs</option>
                                    <option>Miami Dolphins</option>
                                    <option>Minnesota Vikings</option>
                                    <option>Philadelphia Eagles </option>
                                    <option>San Francisco 49ers</option>
                                    <option>Tampa Bay Buccaneers</option>
                                </select>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
       </div>
    );
}
 
export default NFL;

