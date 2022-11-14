import React from "react"
import axios from "axios";

const Url = "https://api.gameofthronesquotes.xyz/v1/random"


function Quote() {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
    axios.get(Url).then((response) => {
     setPost(response.data);
      console.log(post)
    });
  }, []);
  if (!post) return null;
    return(

        <div>
      <p className='Quote'> {post.sentence}</p>
        </div>
    )
}

export default Quote;