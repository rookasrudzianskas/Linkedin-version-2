import React from 'react';
import "./styles/Widgets.css";
import {InfoOutlined} from "@material-ui/icons";

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoOutlined />

            </div>
        </div>
    );
};

export default Widgets;
