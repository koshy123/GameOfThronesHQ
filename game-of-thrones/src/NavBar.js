import React from "react"
import {Link} from "react-router-dom"


function NavBar () {


 return (
    // NavBar
      <div className="navBar">
      <Link to= "/components/Quote"> <h1 className="title"> Game Of Thrones</h1></Link> 
      <Link to='/components/AboutMe' className='AboutMe'><h1> AboutMe </h1></Link>
      <h1>House of the Dragon</h1>
 main
      </div>
    );
  };
    
  export default NavBar;
