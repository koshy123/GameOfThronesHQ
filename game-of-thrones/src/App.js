import './App.css';
import React, {useState, useEffect} from "react"
import NavBar from './NavBar';
import Quote from './components/Quote';
import { Routes, Route ,Link } from "react-router-dom"
import Person from './components/Person';
import AboutMe from './components/AboutMe';
import axios from "axios";


const Url = "https://api.gameofthronesquotes.xyz/v1/random"


function App() {

  const [post, setPost] = useState(false);


    useEffect(() => {
    axios.get(Url).then((response) => {
     setPost(response.data);

    });
  }, []);
  if (!post) return null;


  return (
    <div className="Component">

      <nav className='Nav'>
        <NavBar/>
      </nav>

      <div>
        {post.sentence}
        <Link to='/components/Quote' ><h1> Person Name </h1></Link>

      </div>

      <main>
    
        <Routes>
          
        <Route  path='/components/Quote' element={<Quote post={post} />} />


          <Route  path='/components/AboutMe' element={<AboutMe/>} />

          <Route  path='/components/Person' element={<Person  />} />

        </Routes>

      </main>

    </div>
  );
}

export default App;
