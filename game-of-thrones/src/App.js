import './App.css';
import React, {useState} from "react"
import NavBar from './NavBar';
import Quote from './components/Quote';
import { Routes, Route  } from "react-router-dom"
import Person from './components/Person';
import AboutMe from './components/AboutMe';

function App() {


  const [data, setData] = useState("")


  return (
    <div className="Component">


      <nav className='Nav'>
        <NavBar/>

      </nav>

      <main>
     


      
<Person/>



<Routes>
  
  <Route  path='/components/Quote' element={<Quote/>} />

  <Route  path='/components/AboutMe' element={<AboutMe/>} />

</Routes>

          
      </main>

    </div>
  );
}

export default App;
