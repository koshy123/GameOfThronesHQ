import React from "react";

const ShowPage = (props) => {
return (
        <div>
            <section>
                <h1>{props.post.character.name}</h1>
                <h3> "{props.post.sentence}" </h3>
            </section>
        </div>
      );
    };
export default ShowPage;
  