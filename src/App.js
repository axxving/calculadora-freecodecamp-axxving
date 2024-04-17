import "./App.css";
// Importando la imagen
import freeCodeCampLogo from "./imgs/logo.svg";
// Importando el componente de boton
import { Boton } from "./components/Boton";
// Importando el componente Pantalla
import Pantalla from "./components/Pantalla";
// Importando el componente de Boton Clear
import BotonClear from "./components/BotonClear";
// Importando use state
import { useState } from "react";
// Importando una libreria para las operaciones matematicas
import {evaluate} from "mathjs";

function App() {
  // Hooks
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.")
    }
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          // Llamando a la imagen
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
