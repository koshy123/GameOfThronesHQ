import React from "react"
import {Link} from "react-router-dom"


function NavBar () {


 return (
      <div className="navBar">
      <Link to= "/components/Quote"> <h1 className="title"> Game Of Thrones</h1></Link> 
      <Link to='/components/AboutMe' className='AboutMe'><h1> AboutMe </h1></Link>
      </div>
    );
  };
    
  export default NavBar;
