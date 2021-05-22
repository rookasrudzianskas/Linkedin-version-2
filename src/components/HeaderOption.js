import React from 'react';
import "./styles/HeaderOption.css";
import {Avatar} from "@material-ui/core";

const HeaderOption = ({avatar, title, Icon}) => {
    return (
        <div className="headerOption">
            {/* if there is an icon, show the icon*/}
            {Icon && <Icon className="headerOption__icon" />}
            {/* if in the props there is avatar, so show the avatar*/}
            {avatar && <Avatar className="headerOption__icon" src={avatar} />}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    );
};

export default HeaderOption;
