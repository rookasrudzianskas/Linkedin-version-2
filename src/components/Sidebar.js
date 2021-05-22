import React from 'react';
import "./styles/Sidebar.css";
import {Avatar} from "@material-ui/core";

const Sidebar = () => {


    const recentItem = (topic) => (
        // this returns an item
        <div className="sidebar__recentItem">
            {/* span is going to be the hash and the p something, what is passed*/}
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-3840x2160-1455.jpg" alt=""/>
                <Avatar className="sidebar__avatar" />

                <h2>Rookas Rudzianskas</h2>
                <h4>rokas.rudzenskas@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,454</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2,444</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p className="sidebar__pTag">Recent</p>
                {/* this fires up the recentItem function, which returns the hash and the keyword*/}
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengeneering')}
                {recentItem('design')}
                {recentItem('development')}
            </div>
        </div>
    );
};

export default Sidebar;
