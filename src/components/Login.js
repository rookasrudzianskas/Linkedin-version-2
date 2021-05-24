import React, {useState} from 'react';
import "./styles/Login.css";

const Login = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const register = (e) => {
        e.preventDefault();
    }

    const login = (e) => {

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
