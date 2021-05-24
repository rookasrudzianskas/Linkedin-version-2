import React from 'react';
import "./styles/Widgets.css";
import {FiberManualRecord, InfoOutlined} from "@material-ui/icons";

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
     return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoOutlined />

            </div>
            {newsArticle("Rokas REACT IS BACK!", "Top News - 9999 readers")}
            {newsArticle("Rokas REACT IS BACK!", "Top News - 9999 readers")}
            {newsArticle("Rokas REACT IS BACK!", "Top News - 9999 readers")}
            {newsArticle("Rokas REACT IS BACK!", "Top News - 9999 readers")}
            {newsArticle("Rokas REACT IS BACK!", "Top News - 9999 readers")}
            {newsArticle("Rokas REACT IS BACK!", "Top News - 9999 readers")}
            {newsArticle("Rokas REACT IS BACK!", "Top News - 9999 readers")}
            {newsArticle("Rokas REACT IS BACK!", "Top News - 9999 readers")}
            {newsArticle("Rokas REACT IS BACK!", "Top News - 9999 readers")}
            {newsArticle("Rokas REACT IS BACK!", "Top News - 9999 readers")}
            {newsArticle("lorem10", "Top News - 9999 readers")}
        </div>

    );
};

export default Widgets;
