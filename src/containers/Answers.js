import React from 'react'

const Answer = (props) => {

  let array = props.pokemon.split('');
  let slotArray = [1,2,3,4,5,6]
  let correctAnswer = slotArray[Math.floor(Math.random()*slotArray.length)];

  let slot1 = (correctAnswer !== 1 ? (props.shuffleArray(array)).join('') : (props.pokemon));
  let slot2 = (correctAnswer !== 2 ? (props.shuffleArray(array)).join('') : (props.pokemon));
  let slot3 = (correctAnswer !== 3 ? (props.shuffleArray(array)).join('') : (props.pokemon));
  let slot4 = (correctAnswer !== 4 ? (props.shuffleArray(array)).join('') : (props.pokemon));
  let slot5 = (correctAnswer !== 5 ? (props.shuffleArray(array)).join('') : (props.pokemon));
  let slot6 = (correctAnswer !== 6 ? (props.shuffleArray(array)).join('') : (props.pokemon));


  console.log(correctAnswer);

  return (
    <div>
      <form>
        <input type="button" id="one" onClick={props.onClick} value={slot1}></input>

        <input type="button" id="two" onClick={props.onClick} value={slot2}></input>

        <input type="button" id="three" onClick={props.onClick} value={slot3}></input><br />
        
        <input type="button" id="four" onClick={props.onClick} value={slot4}></input>

        <input type="button" id="five" onClick={props.onClick} value={slot5}></input>

        <input type="button" id="six" onClick={props.onClick} value={slot6}></input>
      </form>
  </div>
  )
}

export default Answer
