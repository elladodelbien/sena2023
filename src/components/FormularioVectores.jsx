import { useEffect, useState } from "react";
import { json } from "react-router-dom";

import { styled } from "styled-components";

const DivContainer = styled.div`



.containerParrafoError {
    font-size:10px;    
    background-color: red;
    margin:10px;
    padding:10px;
    border-radius:5px;
    text-transform: uppercase;
  }
  .noerror {
    display: none;
  }
  form {
    background: #d2d2d2;
    display: flex;
    border-radius: 10px;
    align-items: center;
    flex-direction: column;
    heigth: 80%;
    padding: 25px;
    margin: 10px;
   
    h1 {
      font-size: 15px;
      color: black;
      margin: 10px;
    }
    .buttonVectores {
      background: #5e5bff;
      font-weigth: bold;
      padding: 8px;
      cursor: pointer;
      transition: all 0.5s;
      border-radius: 10px;
    }
    .buttonVectores:hover {
      transform: scale(1.1);
      border-radius: 15px;
      font-weigth: extra-bold;
    }

    label {
      color: black;
      margin-top: 10px;
    }

    input {
      width: 60%;
      border-radius: 5px;
      color: black;
    }
  }
`;

const FormularioVectores = ({ num, grupoNumber, setGrupoNumber }) => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [number5, setNumber5] = useState("");
  const [parrafoArray, setParrafoArray] = useState("");
  const [errorEnAscendencia, seterrorAscendencia] = useState(false)



  const VerificarVectores = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        seterrorAscendencia(true)
        return false;
      }
    }
    return true;
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const valores = [number1, number2, number3, number4, number5];
    //con esto se convierten los numeros de string a numeros enteros
    const convertirAnumeros = [...valores].map((elemento) =>
      parseInt(elemento)
    );
    console.log(convertirAnumeros);
    const numerosOrdenados = [...convertirAnumeros].sort((a, b) => a - b);
    console.log(numerosOrdenados);
    // if (convertirAnumeros != numerosOrdenados){
    //     console.log("son diferentes")
    // }

    // setParrafoArray("Coloca los numeros en orden ascendente")
    if (!VerificarVectores(convertirAnumeros, numerosOrdenados)) {
      return setParrafoArray("Debes colococar los numeros en orden ascendente");
    }
    setParrafoArray("");
    seterrorAscendencia(false)
    setGrupoNumber(convertirAnumeros.sort((a, b) => a - b));
    //arr
  };

  return (
    <DivContainer>
      <form onSubmit={handleSubmit} action="">
        <h1>Ingresa aqui los numeros para el vector {num} </h1>
        <label htmlFor="number1">Numero 1</label>
        <input
          type="number"
          onChange={(e) => setNumber1(e.target.value)}
          value={number1}
          id="number1"
          name="number1"
        />
        <br />

        <label htmlFor="number2">Numero 2</label>
        <input
          type="number"
          onChange={(e) => setNumber2(e.target.value)}
          value={number2}
          id="number2"
          name="number2"
          required
        />
        <br />

        <label htmlFor="number3">Numero 3</label>
        <input
          type="number"
          onChange={(e) => setNumber3(e.target.value)}
          value={number3}
          id="number3"
          name="number3"
          required
        />
        <br />

        <label htmlFor="number4">Numero 4</label>
        <input
          type="number"
          onChange={(e) => setNumber4(e.target.value)}
          value={number4}
          id="number4"
          name="number4"
          required
        />
        <br />

        <label htmlFor="number5">Numero 5</label>
        <input
          type="number"
          onChange={(e) => setNumber5(e.target.value)}
          value={number5}
          id="number5"
          name="number5"
          required
        />
        <br />

        <button type="submit" className="buttonVectores">
          ORGANIZAR VECTORES
        </button>
      </form>
      <div className={errorEnAscendencia ? "containerParrafoError" : "noerror"}>
        <p>aqui va {parrafoArray}</p>
      </div>
    </DivContainer>
  );
};

export default FormularioVectores;
