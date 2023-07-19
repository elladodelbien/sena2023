import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
width:60%;
height:90vh;
font-size:12px;
padding:25px;
background: rgba( 101, 215, 60, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display:flex;
justify-content:center;
align-items:center;

.error {
  display: block;
  background:red;
  color : white;
  margin:12px;
  padding:15px;
  border-radius:4px ;
  font-weight:bold;
  width:90%;
}
.noerror {
  display: none;
}

input {
  color: black;
}

button {
  background:green;
}

.formulario {
  display: flex;
  flex-direction: column;
}`;

const FormularioEdades = ({handleChange,edades,promedioEdadMenores,handleSubmit,handleInputChange}) => {

  const [errorcito,setErrorcito]=useState(false)




  const validarEdadMaxima = (event) => {
    const { name, value } = event.target;

    if (parseInt(value) > 100) {
      setErrorcito(true)
    } else {
      setErrorcito(false)
      handleChange(event);
    }
  };
  return (
    <Container >
      <h1>Ingresa aqui el valor de las edades que deseas promediar</h1>

      <div className="container-Formulario">
      <p className={errorcito ? "error" : "noerror"}>
          Debes colocar solo numeros menores de 100 y mayores a 1
        </p>
        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="edad1">Edad 1:</label>
          <input type="number"  onChange={validarEdadMaxima}  id="edad1" name="edad1" />
          <br />

          <label htmlFor="edad2">Edad 2:</label>
          <input type="number" onChange={handleInputChange} id="edad2" name="edad2" />
          <br />

          <label htmlFor="edad3">Edad 3:</label>
          <input type="number" onChange={handleInputChange} id="edad3" name="edad3" />
          <br />

          <label htmlFor="edad4">Edad 4:</label>
          <input type="number" onChange={handleInputChange} id="edad4" name="edad4" />
          <br />

          <label htmlFor="edad5">Edad 5:</label>
          <input type="number" onhange={handleInputChange} id="edad5" name="edad5" />
          <br />

          <label htmlFor="edad6">Edad 6:</label>
          <input type="number" onhange={handleInputChange} id="edad6" name="edad6" />
          <br />

          <label htmlFor="edad7">Edad 7:</label>
          <input type="number" onhange={handleInputChange} id="edad7" name="edad7" />
          <br />

          <label htmlFor="edad8">Edad 8:</label>
          <input type="number" onhange={handleInputChange} id="edad8" name="edad8" />
          <br />

          <label htmlFor="edad9">Edad 9:</label>
          <input type="number" onhange={handleInputChange} id="edad9" name="edad9" />
          <br />

          <label htmlFor="edad10">Edad 10:</label>
          <input type="number" onhange={handleInputChange} id="edad10" name="edad10" />
          <br />
          <button type="submit">Promediar Edades</button>

        </form>
      </div>
    </Container>
  );
};

export default FormularioEdades;
