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
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../features/userSlice";
import {auth} from "../firebase";

const Header = () => {

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://ricardoreadingmouse.com.au/wp-content/uploads/2018/04/linkedin-logo-copy.png" alt=""/>

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="search" type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={PeopleIcon} />
                <HeaderOption title="Jobs" Icon={WorkIcon} />
                <HeaderOption title="Messaging" Icon={ChatBubbleIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption avatar onClick={logoutOfApp} title="me" />
            </div>
        </div>
    );
};

export default Header;
