
import styled from 'styled-components';

const Roledice = ({roledice,currentDice}) => {

  return (
    <Dicecontainer>
        <div className='dice' onClick={roledice}>
        <img src={`/images/cubes/cube_${currentDice}.png`} alt={`Dice showing ${currentDice}`} />
        </div>
        <p>Click On Dice To Roll</p>
    </Dicecontainer>
  )
}

export default Roledice

const Dicecontainer=styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;

.dice{
cursor:pointer;
}

p{
font-size:24px;
}
`;