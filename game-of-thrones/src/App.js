import './App.css';
import React, {useState} from "react"
import NavBar from './NavBar';
import Quote from './components/Quote';
import { Routes, Route ,Link } from "react-router-dom"
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
        <Routes>
          <Route  path='/components/Quote' element={<Quote setData={setData} />} />
          <Route  path='/components/AboutMe' element={<AboutMe/>} />
          <Route  path='/components/Person' element={<Person setData={setData} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
