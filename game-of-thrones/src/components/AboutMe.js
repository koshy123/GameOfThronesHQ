import React  from "react"
import "./css/about.css"

const AboutMe =  () => {
    return (
         <div >
            <h1 className="title">About</h1>
            <p className="about">
              Below are links to the API's used and the github readme for this project. Thanks
            <br></br>
            </p>
            <div className="api_names">
             <h3>First API-   <a target="_blank" href="https://thronesapi.com/"> https://thronesapi.com/ </a></h3>
             <h3>Second API-   <a target="_blank" href="https://thronesapi.com/swagger/index.html"> Second API - https://thronesapi.com/swagger/index.html</a></h3>
            </div>
            
            <h1 className="about"> <a target="_blank" href="https://github.com/koshy123/GameOfThronesHQ">Github Repo</a></h1>

         </div>
       );
     };
export default AboutMe;
   