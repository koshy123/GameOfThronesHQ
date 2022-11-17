import React  from "react"







const Quote = (props) => {

console.log(props.post.sentence)



return (
        <div>

            {props.post.character}
        </div>
      );
    };
      
  export default Quote;
  