
import React, { useState } from 'react';
import styled from 'styled-components';
import Numberselector from './Numberselector';
import Roledice from './Roledice';
import Rules from './Rules';

const Nestpage = () => {
  const [Score, setScore] = useState(0); // Initialize score with 0
  const [selectednumber, setselectednumber] = useState(null); // Initialize selectednumber with null
  const [currentDice, setcurrentDice] = useState(1);
  const [error,seterror]=useState("");
  const [showrules,setshowrules]=useState(false);

  const generaterandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roledice = () => {
    if (!selectednumber) {
      seterror("You Have Not Selected Any Number!");
      return;
    }
    seterror("");

    const randomnumber = generaterandomnumber(1, 7);
    setcurrentDice((prev) => randomnumber);

    if (selectednumber === randomnumber) {
      setScore((prev) => prev + randomnumber); // Increment score by the random number if guessed correctly
    } else {
      setScore((prev) => prev - 2); // Decrement score by 2 if guessed incorrectly
    }
    setselectednumber(undefined);
  };

  const resetscore =()=>{
 setScore(0);
  };


  return (
    <MainContainer>
      <div className='top-section'>
        <ScoreContainer Score={Score}>
          <h1>{Score}</h1> {/* Display the actual score */}
          <p>Total score</p>
        </ScoreContainer>
        <Numberselector error={error}
        seterror={seterror}
          selectednumber={selectednumber}
          setselectednumber={setselectednumber}
        />
      </div>
      <Roledice currentDice={currentDice} roledice={roledice} />
      <div className='btns'>
        <button onClick={resetscore}>Reset Score</button>
        <button
        onClick={()=> setshowrules((prev)=>!prev)}
        
        
        >{showrules ? "hide" : "show"} Rules</button>

      </div>
       {showrules && <Rules/>} 
    </MainContainer>
  );
};

export default Nestpage;

const ScoreContainer = styled.div`
  text-align: center;
  
  h1 {
    font-size: 100px;
    line-height: 150px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const MainContainer = styled.main`
  padding-top: 70px;

  .top-section {
    display: flex;
    justify-content: space-around; 
    align-items: end;
    gap: 35px; /* Add gap between score and number selector */
  }
    button {
    margin-top: 7px;
    padding: 10px 18px;
    font-size: 16px;
    cursor: pointer;
    background-color: black;
    color: white;
    min-width: 220px;
    border-radius: 5px;
  }
  button:hover{
    background-color: white;
    border: 1px solid black;
    color:black;
    transition: 0.3s background ease-in ;
  }
    .btns{
    margin-top:40px;
     display:flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;
      gap:0.5px;
    }
`;
