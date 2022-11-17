import React  from "react"
import { Link } from "react-router-dom";







const Quote = (props) => {



 
    
return (
        <div>
            <Link to='/components/Person' ><h1 className="clickPerson"> Person Name </h1></Link>
            <button onClick={props.nextQuote}> click </button>

            <h3>"{props.post.sentence}"</h3>

            
</div>


      );
    };
      
  export default Quote;
  