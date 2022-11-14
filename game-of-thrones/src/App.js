import './App.css';
import axios from "axios";
import React from "react"
import NavBar from './NavBar';
import Quote from './components/Quote';


function App() {




  return (
    <div className="Component">


      <nav className='Nav'>
        <NavBar/>
      
      </nav>
      <main>

   
      <Quote/>
      
      </main>

    </div>
  );
}

export default App;
