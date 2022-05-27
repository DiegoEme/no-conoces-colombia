import React from "react";
import "./Home.css";

function Home({ closeModal }) {
  return (
    <div className="background">
      <div className="container">
        <div>
          <p>
            Haz click en el departamento correcto tan pronto como veas su
            nombre. ¡Entre más rápido mejor!
          </p>

          <button onClick={() => closeModal(false)}>JUGAR</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
