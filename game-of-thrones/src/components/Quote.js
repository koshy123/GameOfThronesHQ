import React  from "react"







const Quote = (props) => {

console.log(props.post.sentence)



return (
        <div>

            {props.post.character.name}
        </div>
      );
    };
      
  export default Quote;
  