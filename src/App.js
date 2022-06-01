import { useState, useEffect } from "react";

import { initialStates } from "./utils/utils";
import MyStopwatch from "./components/MyStopWatch";
import Home from "./components/Home";
import Map from "./components/Map";
import "./App.css";

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const [currentTime, setCurrentTime] = useState([0, 0]);
  const [timeoutId, setTimeoutId] = useState();
  const [selectedWrong, setSelectedWrong] = useState(false);
  const [states, setStates] = useState(initialStates);
  const [correctGuess, setCorrectGuess] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [stateToGuess, setStateToGuess] = useState(() => {
    return states[Math.floor(Math.random() * states.length)];
  });

  const handleOnClick = (e) => {
    const stateClicked = e.target.attributes[2].value;
    setSelectedState(stateClicked);

    //Did de user guess the state?
    if (stateClicked === stateToGuess) {
      //Remove the state from the initialStates
      const list = states;
      const newList = list.filter((state) => state !== stateClicked);
      setStates(newList);

      setCorrectGuess([...correctGuess, stateClicked]);
    } else {
      setSelectedWrong(true);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setTimeoutId(
        setTimeout(() => {
          setSelectedWrong(false);
          updatestateToGuess();
        }, 1200)
      );
    }
  };

  const updatestateToGuess = () => {
    const list = states;

    setStateToGuess((prevStateToGuess) => {
      let newStateToGuess = list[Math.floor(Math.random() * list.length)];

      while (list.length > 1 && newStateToGuess === prevStateToGuess) {
        newStateToGuess = list[Math.floor(Math.random() * list.length)];
      }

      return newStateToGuess;
    });
  };

  //End game
  const endGame = () => {
    setIsGameOver(true);
    setTimeout(() => {
      setOpenModal(true);
    }, 500);
  };

  useEffect(() => {
    updatestateToGuess();
  }, [states]);

  useEffect(() => {
    if (states.length < 1) {
      endGame();
    }
  }, [correctGuess, states]);

  return (
    <div className="App">
      {openModal && (
        <Home
          closeModal={setOpenModal}
          isGameOver={isGameOver}
          currentTime={currentTime}
        />
      )}
      <Map
        openModal={openModal}
        stateToGuess={stateToGuess}
        selectedWrong={selectedWrong}
        selectedState={selectedState}
        correctGuess={correctGuess}
        handleOnClick={handleOnClick}
      />
      <MyStopwatch
        isOpenModal={openModal}
        setCurrentTime={setCurrentTime}
        isGameOver={isGameOver}
      />
    </div>
  );
}

export default App;
