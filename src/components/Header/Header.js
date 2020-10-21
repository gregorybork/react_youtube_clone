/* rfce creates basic format */
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";

import { Link } from "react-router-dom";

import "./header.css";

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className = "header">
            <div className="headerLeft">
                <MenuIcon />
                <Link to="/">
                <img className = "headerlogo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
                </Link>
            </div>

            <div className="headerInput">
                <input 
                    onChange= {e => setInputSearch(e.target.value)} 
                    value={inputSearch} 
                    placeholder="Search" 
                    type="text"
                />
                {/* using router to linke */}
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="headerInputButton" />
                </Link>
            </div>

            <div className="headerIcons">
                <VideoCallIcon className="headerIcons" />
                <AppsIcon className="headerIcons"/>
                <NotificationsIcon className="headerIcons"/>
                <Avatar 
                    alt = "Greg Bork"
                    src = "https://avatars0.githubusercontent.com/u/46305741?s=400&u=f55f7142db35af375ef420f79d7f9141f25e44b1&v=4"
                />
            </div> 
        </div>
    )
}

export default Header;
