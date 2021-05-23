import React from 'react';
import "./styles/Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./InputOption";
import ImageIcon from '@material-ui/icons/Image';

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
                    <InputOption Icon={ImageIcon} color="#79B5F9" title="Photo" />
                </div>
            </div>
        </div>
    );
};

export default Feed;
