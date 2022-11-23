import React from "react";

const House = (props) => {
return (
        <div>
            <section>
                <h3 className="quote"> "{props.post.sentence}" </h3>
                <button onClick={props.nextQuote}> click for new quote </button>
                <h1>{props.post.character.house.name}</h1>
                <h1>{props.post.character.name}</h1>


            </section>
        </div>
      );
    };
export default House;
  