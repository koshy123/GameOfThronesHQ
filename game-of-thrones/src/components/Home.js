import React  from "react";
import "./css/home.css";
import john from "./images/john.jpeg"
import ned from "./images/ned.jpeg"
import tyrion from "./images/tyrion.jpeg"
import walker from "./images/walker.jpeg"


const Home =  () => {
    return (
         <div  >
            <h1 className="title">Home Page</h1>
            <p className="intro">
                Hi, Welcome to this app. You can play a game that will test your knowledge of Game of Throne quotes.
                </p>
            <div className="photos">
                <img src={john}></img>
                <img src={ned}></img>
                <img src={tyrion}></img>
                <img src={walker}></img>

            </div>
         </div>
       );
     };
export default Home;
   