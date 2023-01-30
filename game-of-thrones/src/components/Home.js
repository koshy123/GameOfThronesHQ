import React, {useState, useEffect}  from "react"
import "./css/home.css"
import john from "./images/john.jpeg"
import ned from "./images/ned.jpeg"
import tyrion from "./images/tyrion.jpeg"
import walker from "./images/walker.jpeg"


const Home =  () => {

    const [data, setData] = useState([]);


    const fetchData = () => {
        return fetch("https://thronesapi.com/api/v2/Characters")
              .then((response) => response.json())
              .then((data) => setData(data));
      }
      useEffect(() => {
        fetchData();
      },[])

      const fullName = data.map(item=> {
            return item.fullName; 
      })
      
     const Character = ({name, imageUrl}) => (
        <div  class="row" >
                        <h1 >{name}</h1>
                        <img className=".img-circle"   src={imageUrl}/>

        </div>
    )
    return (
        <div class="container">
        <h1 className="title">Home Page</h1>
        <p className="intro"> Hi, Welcome to this app. You can play a game that will test your knowledge of Game of Throne quotes.</p>
        <div class="container" >
        <div class="row">
                {data.map((item,index) => 
               <div class="col-sm" > 
               <Character key={index} imageUrl={item.imageUrl} name={item.fullName} /> </div>)}
         </div>
         </div>
         </div>
       );
     };


export default Home;
   