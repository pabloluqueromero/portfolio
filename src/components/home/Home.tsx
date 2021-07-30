import React from 'react'

import { ChevronDownIcon } from "@heroicons/react/solid";
import './Home.css'
function Home() {
    return (
        <div className="home-background">
            <h1 className="home-welcomemessage">
            <span >Welcome,  </span>
                <span >I am Pablo and I am a computer scientist.</span>
            </h1>
            <a href="#education" className="home-button">
                <span className="home-exploretext">Explore</span>
                <ChevronDownIcon className="home-arrowicon"/>
            </a>
        </div>
        )
}

export default Home;
