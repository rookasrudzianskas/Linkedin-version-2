import React, {useState} from 'react';
import "./styles/Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import NoteIcon from '@material-ui/icons/Note';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InputOption from "./InputOption";
import Post from "./Post";

const Feed = () => {

    const [post, setPosts] = useState();

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
                    <InputOption Icon={SubscriptionsIcon} color="#E7A33E" title="Video" />
                    <InputOption Icon={NoteIcon} color="#C0CBCD" title="Event" />
                    <InputOption Icon={CalendarTodayIcon} color="#7FC15E" title="Write an article" />
                </div>
            </div>

        {/*    Posts    */}
            <Post name="Rokas Rudzianskas" description="This is a test post" message="Wow this really works"/>


        </div>
    );
};

export default Feed;
