import React from "react";
import "./App.css";
 
import Posts from "./components/Posts";
import Navbar from "./components/BlogNav"
import Button from "./components/BlogNav"
 
const App = () => {
    return (
        <div className="main-container" style={{backgroundColor: "aliceblue"}}>
            <Navbar />
            <Posts />
            <Button />
        </div>
    );
};
 
export default App;