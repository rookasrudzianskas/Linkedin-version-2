import React, {useEffect, useState} from 'react';
import "./styles/Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import NoteIcon from '@material-ui/icons/Note';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InputOption from "./InputOption";
import Post from "./Post";
import db from "../firebase";
import firebase from "firebase";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import FlipMove from "react-flip-move";


const Feed = () => {

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");
    const user = useSelector(selectUser);

    // console.log(posts);
    useEffect(() => {
        // will run once, then component loads
        db.collection("posts").orderBy("timestamp", 'desc').onSnapshot(snapshot => {
            // we get real time listener
            setPosts(snapshot.docs?.map(doc => (
                // for every post in posts, we return
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        })
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        // adds the post
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("")
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange={event => setInput(event.target.value)} type="text"/>
                        <button type="submit" onClick={sendPost}>Send</button>
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
            <FlipMove>
                {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                    <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
                ))}
            </FlipMove>


        </div>
    );
};

export default Feed;
