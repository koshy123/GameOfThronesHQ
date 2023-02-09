import React, {useState, useEffect}  from "react"
import {Link} from "react-router-dom"
import "./css/home.css"
import john from "./images/john.jpeg"
import ned from "./images/ned.jpeg"
import tyrion from "./images/tyrion.jpeg"
import walker from "./images/walker.jpeg"


const Home =  () => {


    return (  
        <div class="container">
        <h1 className="title">Home</h1>
        <p className="intro">"I prefer to work with grey characters rather than black and white."<br></br>
          -George R. R. Martin
        </p>
        <p className="intro">"The story-maker proves a successful 'sub-creator'. He makes a Secondary World which your mind can enter. Inside it, what he relates is 'true': it accords with the laws of that world. You therefore believe it, while you are, as it were, inside. The moment disbelief arises, the spell is broken; the magic, or rather art, has failed."<br></br>
          -J.R.R. Tolkien
        </p>
        <div class="container" >
          <Link to="/components/Quote"> True Fan? Test your Game of Thrones knowledge, with this game!</Link>
        <img className='image-pic' src='http://reelgood.com.au/app/uploads/2014/11/daenerys-dragon-reelgood.jpg'/>

         </div>
         </div>
       );
     };


export default Home;
   