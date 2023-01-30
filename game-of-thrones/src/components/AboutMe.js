import React  from "react"
import "./css/about.css"

const AboutMe =  () => {
    return (
         <div >
            <h1 className="title">About This Site</h1>
            <p className="about">
            This site was created by Jeffrey Koshy. 
            <br></br>
            The Game page is a guessing game based on the quote by the individual. 
            There are two API's being used: . <br></br>
            I do not own the right to any info on this site, it belongs to HBO, Game of Thrones series.
            </p>
            <img className='image-pic' src='http://reelgood.com.au/app/uploads/2014/11/daenerys-dragon-reelgood.jpg'/>

         </div>
       );
     };
export default AboutMe;
   