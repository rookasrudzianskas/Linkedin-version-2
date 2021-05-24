import React, {useState} from 'react';
import "./styles/Login.css";
import {auth} from "../firebase";
import {useDispatch} from "react-redux";

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();

        if(!name) {
            return alert("Please enter a full name")
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }));
            });
        }).catch(error => alert(error))
    };

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }));
        }).catch(error => alert(error));
    }

    return (
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt=""/>

            <form action="">
                <input value={name} onChange={event => setName(event.target.value)} type="text" placeholder="Full name (required if registering)"/>
                <input value={profilePic} onChange={event => setProfilePic(event.target.value)} type="text" placeholder="Profile picture URL (optional)"/>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Email"/>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Password"/>

                <button type="submit" onClick={login}>Sign In</button>
            </form>

            <p>Not a member? <span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    );
};

export default Login;
