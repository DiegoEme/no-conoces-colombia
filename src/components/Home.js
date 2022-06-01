import React, { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import rodi from "../rod2.gif";
import flag from "../colombia.png";
import "./Home.css";

function Home({ closeModal, isGameOver, currentTime }) {
  const [endMessage, setEndMessage] = useState("");
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  useEffect(() => {
    let minutes;
    if (currentTime[0] < 1) {
      minutes = "";
    } else if (currentTime[0] === 1) {
      minutes = "1 minuto y";
    } else {
      minutes = `${currentTime[0]} minutos y`;
    }

    setEndMessage(`${minutes} ${currentTime[1]} segundos`);
  }, [currentTime]);

  return (
    <div className="background" ref={confettiRef}>
      <h1 style={{ position: "absolute", top: 0 }}>
        <img
          alt="colombia"
          style={{ verticalAlign: "middle" }}
          src={flag}
          width={30}
        />{" "}
        NO CONOCES COLOMBIA{" "}
        <img
          alt="colombia"
          style={{ verticalAlign: "middle" }}
          width={30}
          src={flag}
        />
      </h1>
      <div className="container">
        <div>
          {isGameOver ? (
            <>
              <p>¡Bien hecho! ✌️ tiempo total:</p>
              <p>{endMessage}</p>
              <button onClick={() => window.location.reload()}>
                VOLVER A JUGAR 🕹️
              </button>
              <div>
                <Confetti
                  recycle={false}
                  numberOfPieces={200}
                  width={width}
                  height={height}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                ¿Sabes más que él?
                <span>
                  👉
                  <img
                    style={{ verticalAlign: "middle" }}
                    src={rodi}
                    alt="rodi"
                    width={40}
                  />
                </span>
              </div>
              <br />
              <p>
                Haz click en el departamento correcto tan pronto como veas su
                nombre.
              </p>
              <br />
              <p>⏳ ¡Cuanto más rápido mejor! ⏳</p>

              <button onClick={() => closeModal(false)}>JUGAR 🕹️</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
