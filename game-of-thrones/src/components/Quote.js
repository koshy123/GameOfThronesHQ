import React, { useState , useEffect} from "react"
import { Button } from 'react-bootstrap';
import "./css/quote.css";

const Quote = (props) => {



  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [data, setData] = useState([]);


  function handleChange(event) {
    setAnswer(event.target.value);
  }

  function handleSubmit() {
    if (answer === props.post.character.name) {
      alert("Correct!");
      setScore(score + 1);
    } else {
      alert("Wrong, hover over below");
    }
    setAnswer("");
    props.nextQuote();


  }


  function handleMouseOver() {
    setAnswerVisible(true);
  }
  function handleMouseLeave() {
    setAnswerVisible(false);
  }


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
      <h2 >{name}</h2>
      <img className=".img-circle"   src={imageUrl}/>
      </div>
        )


  return (
    <div>
      <h1 className="title">Guess the Quote</h1>
      <div className="got_game">
        <div className="container">
          <div class="d-flex justify-content-between">
            <p>Game Instructions:<br></br> 1. Read the quote below.<br></br> 2. Guess the name of which GOT character has said the quote.<br></br> 3. Have fun!  </p> <br></br>
          </div>
          <div>
          <h3 className="quote mt-4">"{props.post.sentence}"</h3>  

          </div>
          <div class="d-flex justify-content-start"     >
          <p className="quote">Who said this quote?</p>
          <input className="input_box"   type="text" value={answer} onChange={handleChange} />
          <Button class="btn btn-primary h-25" onClick={handleSubmit}>Submit</Button> 
            </div>

          <div className="tips">
          <p className="mt-4 a_tip" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
           {answerVisible ? props.post.character.house.name : " Hover over for the house name! "} </p>
          <p>Current Score: {score}</p>          
          <button class="btn btn-primary h-25 mt-4" onClick={props.nextQuote}> Skip This Question </button>
          </div>
       
          </div>
          <div className="row col-10" >
                {data.map((item,index) => 
               <div class="col-sm" > 
               <Character  key={index} imageUrl={item.imageUrl} name={item.fullName} /> </div>)}
         </div>
        
      
       
      {/* To learn more about this character click below */}
      {/* <Link to='/components/Person' ><h1 className="click-person"> Person Name </h1></Link> */}
      </div>
    </div>
  );
};
export default Quote;
