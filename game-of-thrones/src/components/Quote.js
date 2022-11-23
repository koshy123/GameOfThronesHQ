import React  from "react"
import { Link } from "react-router-dom";

const Quote = (props) => {
return (
        <div>
            <h3 className="quote">"{props.post.sentence}"</h3>
            <button onClick={props.nextQuote}> click for new quote </button>
            <Link to='/components/Person' ><h1 className="click-person"> Person Name </h1></Link>
        </div>
      );
    };
export default Quote;
  