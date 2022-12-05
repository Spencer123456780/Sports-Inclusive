import React from 'react';
import { Link } from "react-router-dom"; 
import sportsPic from '../img/Sports.png';
import NBAPic from '../img/NBASweep.png';
import NHLPic from '../img/NHLSweep.png';
import NFLPic from '../img/NFLSweep.png';

const home = () => {
    return (
       <div>
          <h1 id='Title'>Top Stories</h1>
            <div id='Inlayed'>
                <div>
                    <h4  id = "Home-Title">Website Introduction</h4>
                    <div>
                        <img src = {sportsPic} id = "Sports-Left-News"></img>
                    </div>
                    <div id = "NHL-Left-Text">
                        <p>This is a Sports Website with the newest scheduals for each team in the NBA, NHL and NFL. The objective of this website is to allow the view to check when there favoret team is playing.</p>
                    </div>
                    <div id = "NHL-Tag-Box">
                        <p> <Link id = "HomeLeft-Tag" to={'/NBA'}>#NBA</Link></p>
                        <p> <Link id = "HomeLeft-Tag" to={'/NHLPlayers'}>#NHL</Link></p>
                        <p> <Link id = "HomeLeft-Tag" to={'/NFLPlayers'}>#NFL</Link></p>
                    </div>
                    <h5> <Link id = "Home-Sports-Bottom-Text" to={'/NBA'}>See More NBA</Link> <Link id = "Home-Sports-Bottom-Text" to={'/NHLPlayers'}>See More NHL</Link> <Link id = "Home-Sports-Bottom-Text" to={'/NFLPlayers'}>See More NFL</Link></h5>
                </div>

                <div id='HomePageRight'>
                    <div id = "Artical">

                        <div id = "News-Artical">
                            <div>
                                <img src = {NBAPic} id = "Artical-Image"></img>
                            </div>
                            <h5 id = "Artical-Title">NBA Teams and there Scheduals.</h5>
                            <div id = "New-Tag-Box">
                                <p> <Link id = "New-Tag" to={'/NBA'}>#NBA</Link></p>
                            </div>
                        </div>

                        <div id = "News-Artical-Bottom">
                            <div>
                            <img src = {NFLPic} id = "Artical-Image"></img>
                            </div>
                            <h5 id = "Artical-Title">NFL Teams and there Scheduals</h5>
                            <div id = "New-Tag-Box">
                            <p> <Link id = "New-Tag" to={'/NFLPlayers'}>#NFL</Link></p>
                            </div>
                        </div>
                    </div>

                    <div id = "Artical1">

                        <div id = "News-Artical">
                            <div>
                                <img src = {NHLPic} id = "Artical-Image"></img>
                            </div>
                                <h5 id = "Artical-Title">NHL Teams and there Scheduals</h5>
                            <div id = "New-Tag-Box">
                                <p> <Link id = "New-Tag" to={'/NHLPlayers'}>#NHL</Link></p>
                            </div>
                        </div>

                        <div id = "News-Artical-Bottom">
                            <div id = "Artical-Image"></div>
                                <h5 id = "Artical-Title">Calgary Flames off to a amazing start to the 2022/23 regular seasson</h5>
                            <div id = "New-Tag-Box">
                                <p id = "New-Tag">#NHL</p>
                                <p id = "New-Tag">#Calgary Flames</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
       </div>
    );
}

export default home;
