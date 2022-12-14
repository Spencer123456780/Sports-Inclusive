import React from 'react';
import { Link } from "react-router-dom"; 
import sportsPic from '../img/Sports.png';
import NBAPic from '../img/NBASweep.png';
import NHLPic from '../img/NHLSweep.png';
import NFLPic from '../img/NFLSweep.png';
import Schedules from '../img/SchedualesImage.png';

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
                        <p> <Link id = "HomeLeft-Tag" to={'/NHL'}>#NHL</Link></p>
                        <p> <Link id = "HomeLeft-Tag" to={'/NFL'}>#NFL</Link></p>
                    </div>
                    <h5> <Link id = "Home-Sports-Bottom-Text" to={'/NBA'}>See More NBA</Link> <Link id = "Home-Sports-Bottom-Text" to={'/NHL'}>See More NHL</Link> <Link id = "Home-Sports-Bottom-Text" to={'/NFL'}>See More NFL</Link></h5>
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
                            <p> <Link id = "New-Tag" to={'/NFL'}>#NFL</Link></p>
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
                                <p> <Link id = "New-Tag" to={'/NHL'}>#NHL</Link></p>
                            </div>
                        </div>

                        <div id = "News-Artical-Bottom">
                            <div id = "Artical-Image">
                                <img src={Schedules} id = "Artical-Image"></img>
                            </div>
                                <h5 id = "Artical-Title">Come fine your favoret teams and when there next game is</h5>
                            <div id = "New-Tag-Box">
                                <p id = "New-Tag">#Sports Inclusive</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
       </div>
    );
}

export default home;
