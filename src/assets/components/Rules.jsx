import React from 'react';
import styled from 'styled-components';

const Rules = () => {
  return (
    <RuleContainer>
      <h2>How to play dice game?</h2>
      <div className='text'> 
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After clicking on the dice, if the selected number is equal to the dice number, you will get the same points as the dice{" "}
        </p>
        <p>If you get a wrong guess, then 2 marks will be deducted</p>
      </div>
    </RuleContainer>
  );
}

export default Rules;

const RuleContainer = styled.div`
  max-width: 800px;
  max-height:300px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top:20px;
  border-radius:10px;
  display:flex;
  flex-wrap:wrap;

  h2 {
    font-size: 24px;
  }

  .text {
    margin-top: 24px;
  }
`;