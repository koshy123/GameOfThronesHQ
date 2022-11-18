import './App.css';
import React, {useState, useEffect} from "react";
import NavBar from './NavBar';
import Quote from './components/Quote';
import { Routes, Route ,Link } from "react-router-dom";
import Person from './components/Person';
import AboutMe from './components/AboutMe';
import axios from "axios";
import Footer from './Footer';
import ThemeSwitcher from './components/DropDown';

const Url = "https://api.gameofthronesquotes.xyz/v1/random"

function App() {
  const [post, setPost] = useState(false);
  const [quote, setQuote] = useState(true);
    useEffect(() => {
    axios.get(Url).then((response) => {
     setPost(response.data);
    });
  },[quote]);
  if (!post) return null;

function nextQuote(){
  setQuote(!quote)
}

  return (
    <div className="Component">
      <nav className='Nav'>
        <NavBar/>
      </nav>
          <ThemeSwitcher/>
        <main>
        <Routes>
          <Route  path='/components/Quote' element={<Quote post={post} nextQuote ={nextQuote} />} />
          <Route  path='/components/AboutMe' element={<AboutMe/>} />
          <Route  path='/components/Person' element={<Person post={post} />} />
        </Routes>

        <img className='imagePic' src='http://reelgood.com.au/app/uploads/2014/11/daenerys-dragon-reelgood.jpg'/>
      </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
