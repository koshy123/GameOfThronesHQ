import './App.css';
import React, {useState, useEffect} from "react";
import NavBar from './NavBar';
import Quote from './components/Quote';
import { Routes, Route ,Link } from "react-router-dom";
import Person from './components/Person';
import AboutMe from './components/AboutMe';
import axios from "axios";
import Footer from './Footer';
import House from './components/House';

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
    <div className="component">
      <nav className='nav'>
        <NavBar/>
      </nav>
      <h1 className='title-name'>The Game of Thrones</h1>
      <main className='main'>
       <div className='div-quote'>
        <Routes >
          <Route  path='/components/Quote' element={<Quote post={post} nextQuote ={nextQuote} />} />
          <Route  path='/components/AboutMe' element={<AboutMe/>} />
          <Route  path='/components/Person' element={<Person post={post} nextQuote ={nextQuote} />} />
          <Route  path='/components/House' element={<House post={post} nextQuote ={nextQuote} />} />

        </Routes>
      </div> 
            <div className='disclaimer'><h1>We would like to let the user know that some quotes may be offensive.</h1></div>

      </main>
      <img className='image-pic' src='http://reelgood.com.au/app/uploads/2014/11/daenerys-dragon-reelgood.jpg'/>
      <footer className='footer'><Footer/></footer>
    </div>
  );
}

export default App;
