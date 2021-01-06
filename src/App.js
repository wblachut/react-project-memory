import React, { useState } from "react";
import Header from "./components/Header";
import MemoCard from "./components/MemoCard";
import deck from "./deck.json";
import "./style/App.css";

const App = () => {
  const [cards] = useState(deck)
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [cardUsed, setCardUsed] = useState(false)

  const handleClick = (id) => {
    shuffleArray();
    handleScore(id);
  };

  const handleIncrement = () => {
    setCurrentScore(currentScore + 1);
  };
  
  const handleScore = (id) => {
    cards.forEach(element => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        setCardUsed(false);
        handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        if (currentScore > highScore) {
          setHighScore(currentScore);
        }
        setCurrentScore(0);
        setCardUsed(true);
        cards.forEach(element => (element.clicked = false));
        console.log(cards);
      }
    });
  };

  const shuffleArray = () => {
    shuffle(cards);
  };

  // Function that takes an array as a parameter and shuffles it
  const shuffle = (array) => {
    let currentIndex = array.length
    // While there remain elements to shuffle...
    while ( currentIndex !== 0 ) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

    return (
      <div>
        <Header
          currentScore={currentScore}
          highScore={highScore}
        />
        <div className="game-board">
          {cards.map(card => (
             <MemoCard
                Clicked={cardUsed}
                handleClick={handleClick}
                id={card.id}
                key={card.id}
                description={card.description}
                image={card.image}
                color={card.color}
            />
          ))}
        </div>
      </div>
    );
}

export default App
