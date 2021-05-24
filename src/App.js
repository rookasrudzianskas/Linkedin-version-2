import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import {useSelector} from "react-redux";
import Login from "./components/Login";
import {selectUser} from "./features/userSlice";

function App() {
    const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

        {!user ? (
            <Login />
            ) : (


        <div className="app__body">
            <Sidebar />
            <Feed />
        </div>

        )}

    </div>
  );
}

export default App;
