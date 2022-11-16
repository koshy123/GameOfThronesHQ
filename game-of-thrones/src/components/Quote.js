import React from "react"
import axios from "axios";
import Person from "./Person";
const Url = "https://api.gameofthronesquotes.xyz/v1/random"


function Quote() {

    const [post, setPost] = React.useState("");

    React.useEffect(() => {
    axios.get(Url).then((response) => {
     setPost(response.data);

    });
  }, []);
  if (!post) return null;


//  let newQuote = post.map((evt) => 
//  { return   evt.sentence;
//    } )
  
  


    return(

        <div>
        <p className='Quote'> {post.sentence}</p>
         {/* <button onClick = {newQuote} > click</button>  */}
        </div>
    )
}

export default Quote;