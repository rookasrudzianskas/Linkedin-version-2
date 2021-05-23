import React from 'react';
import "./styles/Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./InputOption";

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption />
                </div>
            </div>
        </div>
    );
};

export default Feed;
