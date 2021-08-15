import React from 'react';
import { socialLink } from '../../data';
import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar-container">
            <a href={`mailto:${socialLink.mail}?subject="Hi Pablo, I'd like to know more about you"`} target="_blank" rel="noreferrer" className="sidebar-icon"><i className="fas fa-envelope" aria-hidden="true"></i></a>
            <a href={socialLink.linkedin} target="_blank" rel="noreferrer" className="sidebar-icon"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
            <a href={socialLink.github} target="_blank" rel="noreferrer" className="sidebar-icon"><i className="fab fa-github" aria-hidden="true"></i></a>
            <a href={socialLink.cv}  target="_blank" rel="noreferrer" className="sidebar-icon"><i className="fas fa-download" aria-hidden="true"></i></a>
        </div >
    )
}

export default Sidebar;
