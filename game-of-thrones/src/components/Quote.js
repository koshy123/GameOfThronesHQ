import React  from "react"
import { Link } from "react-router-dom";

const Quote = (props) => {
return (
        <div>
            <h3>"{props.post.sentence}"</h3>
            <Link to='/components/Person' ><h1 className="click-person"> Person Name </h1></Link>
            <button onClick={props.nextQuote}> click for new quote </button>            
        </div>
      );
    };
export default Quote;
  