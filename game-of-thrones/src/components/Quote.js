import React, { useState } from "react"
import { Button } from 'react-bootstrap';
import "./css/quote.css";

const Quote = (props) => {


  // let score = 0;

  // function checkAnswer(answer, correctAnswer) {
  //   if (answer === correctAnswer) {
  //     score++;
  //     return "Correct! Your score is now " + score;
  //   } else {
  //     return "Incorrect. The correct answer is " + correctAnswer + ". Your score is still " + score;
  //   }
  // }



  // let input = document.getElementById("answer-input");
  // let submitBtn = document.getElementById("submit-btn");

  // submitBtn.addEventListener("click", function(){
  //     let answer = input.value;
  //     console.log(answer);
  // });

  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);

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
  console.log(score)


  function handleMouseOver() {
    setAnswerVisible(true);
  }
  function handleMouseLeave() {
    setAnswerVisible(false);
  }


  return (
    <div>
      <h1 className="title">Guess the Quote</h1>
      <div className="got_game">
        <div className="container">
          <div class="d-flex justify-content-between">
          <h3 className="quote mt-4">"{props.post.sentence}"</h3>  
          <button class="btn btn-primary h-25 mt-4" onClick={props.nextQuote}> Skip This Question </button>
          </div>
          <div class="d-flex justify-content-evenly"     >
          <p className="quote">Who said this quote?</p>
          <input className="input_box"  type="text" value={answer} onChange={handleChange} />
          <Button class="btn btn-primary h-25" onClick={handleSubmit}>Submit</Button> <br></br>
          <p className="mt-4" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          {answerVisible ? props.post.character.name : "Anwser Box"}
          <p>Score={score}</p>
        </p>
          </div>
        
      
        </div>
        {/* To learn more about this character click below */}
      {/* <Link to='/components/Person' ><h1 className="click-person"> Person Name </h1></Link> */}
      </div>
  

    </div>
  );
};
export default Quote;
