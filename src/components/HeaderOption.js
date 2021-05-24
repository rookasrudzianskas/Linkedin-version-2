import React from 'react';
import "./styles/HeaderOption.css";
import {Avatar} from "@material-ui/core";
import {selectUser} from "../features/userSlice";
import {useSelector} from "react-redux";

const HeaderOption = ({avatar, title, Icon, onClick}) => {

    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {/* if there is an icon, show the icon*/}
            {Icon && <Icon className="headerOption__icon" />}
            {/* if in the props there is avatar, so show the avatar*/}
            {avatar && (
            <Avatar className="headerOption__icon" src={user?.photoUrl} >{user?.email[0]}</Avatar>
            )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    );
};

export default HeaderOption;
