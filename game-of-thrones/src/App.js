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
import Home from './components/Home';
import Dragon from './components/Dragon';

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
      <main className='main'>
       <div>
        <Routes >
          <Route  path='/components/Quote' element={<Quote post={post} nextQuote ={nextQuote} />} />
          <Route  path='/components/AboutMe' element={<AboutMe/>} />
          <Route  path='/' element={<Home/>} />
          <Route  path='/components/Person' element={<Person post={post} nextQuote ={nextQuote} />} />
          <Route  path='/components/House' element={<House post={post} nextQuote ={nextQuote} />} />
          <Route  path='/House_of_the_Dragon' element={<Dragon post={post} nextQuote ={nextQuote} />} />

        </Routes>
      </div> 
      </main>
      <footer className='footer'><Footer/></footer>
    </div>
  );
}

export default App;
