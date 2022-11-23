import React from "react";
import { Link } from "react-router-dom";

const ShowPage = (props) => {
return (
        <div>
            <section>
            <h3 className="quote"> "{props.post.sentence}" </h3>
            <button onClick={props.nextQuote}> click for new quote </button>
            <h1>{props.post.character.name}</h1>
            <Link to='/components/House' ><h1 className="click-house"> House Name </h1></Link>
            </section>
        </div>
      );
    };
export default ShowPage;
  