import React from 'react';



const NFL = () => {
    return (
       <div>
            <h1 id='Title'>NFL</h1>
            
            <div id='Inlayed'>
                <div id='NFLInfo'>
                    <h3>Weekly Highlights</h3>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </div>

                <div id='TeamsPlayers'>
                        <h2 id='Spaceingz'>Teams | Players</h2>
                        <form>
                            <div id='Spaceingz'>
                                <label> My NFL Teams
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

