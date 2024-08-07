import './App.css';
import { useState } from 'react';
import Nestpage from './assets/components/Nestpage';

function App() {
  const [nextPage, setNextPage] = useState(false);

  const toggleGamePlay = () => {
    setNextPage((prev) => !prev);
  };

  return (
    <>
      {nextPage ? (<Nestpage />) : (
        <div className="container">
          <img src="images/dices 1.png" alt="Dice" className="dice-image" />
          <div>
            <h1 className="title">DICE GAME</h1>
            <button className="button" onClick={toggleGamePlay}>PLAY NOW</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
