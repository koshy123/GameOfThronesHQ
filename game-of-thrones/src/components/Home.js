import React, {useState, useEffect}  from "react"
import {Link} from "react-router-dom"
import "./css/home.css"
import john from "./images/john.jpeg"
import ned from "./images/ned.jpeg"
import tyrion from "./images/tyrion.jpeg"
import walker from "./images/walker.jpeg"
import thrones from "./images/game-thrones.jpeg"


const Home =  () => {


    return (
      <div>
        <h1 className="title">Home</h1>
            <div class="container" >
          <Link to="/components/Quote">True Fan? Test your Game of Thrones knowledge, with this game!</Link>
        {/* <img className='image-pic' src='http://reelgood.com.au/app/uploads/2014/11/daenerys-dragon-reelgood.jpg'/> */}

         </div>

        <div class="home_page">

        <img className="home_img" src={thrones}></img>
        <div className="quote">
        <p className="intro">"The story-maker proves a successful 'sub-creator'. He makes a Secondary World which your mind can enter. You therefore believe it, while you are, as it were, inside. "<br></br>
         <span className="author" > -J.R.R. Tolkien</span>
        </p>
        </div>

         </div>

         </div>  
       );
     };


export default Home;
   