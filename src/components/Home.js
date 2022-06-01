import React, { useEffect, useState } from "react";
import "./Home.css";

function Home({ closeModal, isGameOver, currentTime }) {
  const [endMessage, setEndMessage] = useState("");

  let minutes;
  useEffect(() => {
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
    <div className="background">
      <h1 style={{ position: "absolute", top: 0 }}>NO CONOCES COLOMBIA</h1>
      <div className="container">
        <div>
          {isGameOver ? (
            <>
              <p>¡Bien hecho! tiempo total:</p>
              <p>{endMessage}</p>
              <button onClick={() => window.location.reload()}>
                VOLVER A JUGAR
              </button>
            </>
          ) : (
            <>
              <p>
                Haz click en el departamento correcto tan pronto como veas su
                nombre.
              </p>
              <br />
              <p>¡Entre más rápido mejor!</p>

              <button onClick={() => closeModal(false)}>JUGAR</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
