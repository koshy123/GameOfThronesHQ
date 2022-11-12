import './App.css';
import axios from "axios";
import React from "react"



const Url = "https://api.gameofthronesquotes.xyz/v1/random"

function App() {



  const [post, setPost] = React.useState(null);

    React.useEffect(() => {
    axios.get(Url).then((response) => {
     setPost(response.data);
      console.log(post)
    });
  }, []);
  if (!post) return null;
  return (
    <div className="Component">


      <nav className='Nav'>
        Game of Thrones quotes
      </nav>
      <main>
        
   
      <p> {post.sentence}</p>

      
      </main>

    </div>
  );
}

export default App;
