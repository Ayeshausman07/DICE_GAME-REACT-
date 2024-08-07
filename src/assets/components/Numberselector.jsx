
import React, { useState } from 'react';
import styled from 'styled-components';

const Numberselector = ({ seterror,error,selectednumber,setselectednumber}) => {
  const arrnum = [1, 2, 3, 4, 5, 6];
  

  const numberselecthandler =(value)=>{
    setselectednumber(value);
    seterror("");
  };

  return (
    <NumberSelectContainer>
      <p className='error'>{error}</p>
      <div className='flex'>
        {arrnum.map((value, i) => (
          <Boxx
            isSelected={value === selectednumber}
            key={i}
            onClick={()=>numberselecthandler(value)}
          >
            {value}
          </Boxx>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectContainer>
  );
};

export default Numberselector;

const NumberSelectContainer = styled.div`

display:flex;
flex-direction:column;
align-items:end;

  .flex {
    display: flex;
    gap:24px; /* Adjust gap between buttons */
  
  }

  p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px; /* Space between buttons and text */
  }
    .error{
    color:red;
    }
`;

const Boxx = styled.div`
  height: 72px;
  width: 70px; /* Width of the buttons */
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (!props.isSelected ? 'black' : 'white')};
  cursor: pointer;
`;