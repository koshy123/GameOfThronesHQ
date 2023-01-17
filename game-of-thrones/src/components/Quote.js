import React, { useState }  from "react"
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

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

function handleChange(event) {
  setAnswer(event.target.value);
}

function handleSubmit() {
  if (answer === props.post.character.name) {
    alert("Correct!");
    setScore(score + 1);
  } else {
    alert("Incorrect, the correct answer is Paris");
  }
}

return (
        <div>
            <h3 className="quote">"{props.post.sentence}"</h3>
            <Button onClick={props.nextQuote}> click for new quote </Button>
            <div>
      <input type="text" value={answer} onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
            <Link to='/components/Person' ><h1 className="click-person"> Person Name </h1></Link>
        </div>
      );
    };
export default Quote;
  