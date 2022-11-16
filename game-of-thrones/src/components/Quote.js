import React, {useState, useEffect}  from "react"
import axios from "axios";
import Person from "./Person";
import { Routes, Route ,Link } from "react-router-dom"

const Url = "https://api.gameofthronesquotes.xyz/v1/random"

function Quote({setData}) {

    const [post, setPost] = useState("");

    useEffect(() => {
    axios.get(Url).then((response) => {
     setPost(response.data);

    });


  }, []);
  if (!post) return null;
setData(post)


//   let newQuote = post.map((evt) => 
//   { return   evt.sentence;
//      } )


    return(

        <div>
        <p className='Quote'> {post.sentence}</p>
<Person/>
      <Link to='/components/Person' ><h1> Person Name </h1></Link>

       {/* <button onClick = {newQuote} > click</button>   */}
        </div>
    )
}

export default Quote;