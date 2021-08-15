import React from 'react'

import './Home.scss'
import {home} from '../../data';

function Home() {
    return (
        <section id="home" className="section-container">
            <div className="section-subcontainer home-container">
                <h3 className="home-welcomemessage-line-1 text-l">{home[0]}</h3>
                <h1 className="home-welcomemessage-line-2 text-xxl">{home[1]}</h1>
                <h2 className="home-welcomemessage-line-3 text-xl">{home[2]}</h2>
                <p className="home-welcomemessage-line-4 text-m">{home[3]}</p>
                <a href="#about" className="button explore-button">Explore</a>
            </div>
        </section>
    )
}
/*<a href="#education" className="home-button">
                <span className="home-exploretext">Explore</span>
                <ChevronDownIcon className="home-arrowicon"/>
            </a> */

export default Home;
