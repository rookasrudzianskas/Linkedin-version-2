import React from 'react';
import "./styles/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HeaderOption from "./HeaderOption";
import {Avatar} from "@material-ui/core";

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.amocrm.com/static/images/pages/integrations/logo/linkedin.png" alt=""/>

                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={PeopleIcon} />
                <HeaderOption title="Jobs" Icon={WorkIcon} />
                <HeaderOption title="Messaging" Icon={ChatBubbleIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg" title="me" />
            </div>
        </div>
    );
};

export default Header;
