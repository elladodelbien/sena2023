import styled from "styled-components";
import ancianito from "../assets/anciano.json";
import joven from "../assets/joven.json"
import nino from "../assets/nino.json"
import { useEffect, useState } from "react";
import FormularioEdades from "../components/FormularioEdades";
import Lottie from "lottie-react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const FormularioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:10px;
 
`;
const Container2 = styled.div`
  overflow: auto;
  height: 100%;
  padding-top: 20px;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  span {
    font-size:30px;
    color:#f5de04;
    font-weight:bold;
  }
  @media (max-width: 768px) {
    display:block;
    overflow:visible;
    margin-top:49px;
    .box {
      max-width: 86%;
      overflow-x: hidden;
    }
    
  }

  .reductor {
    width: 40%;
    display: flex;
    margin: 0 auto;
   
  }
  #edadesMenores,
  #edadesMayores,
  #edadesAncianos {
    font-size: 24px;
  }

  .box {
    color: white;
    font-size: 4vw;
    padding: 10px;
    background: #11211740;
    text-align: center;
    border-radius:5px;
    box-shadow:0 0 19px 1px black;
    margin:13px;
  }
  .box:nth-child(1) {
    grid-column: span 12;
  }
  .box:nth-child(2) {
    grid-column: span 12;
  }
  .box:nth-child(3) {
    grid-column: span 12;
  }
  .box:nth-child(4) {
    grid-column: span 12;
  }
  .box:nth-child(5) {
    grid-column: span 12;
  }
`;

const Edades = () => {
  const [edades, setEdad] = useState({
    edad1: "",
    edad2: "",
    edad3: "",
    edad4: "",
    edad5: "",
    edad6: "",
    edad7: "",
    edad8: "",
    edad9: "",
    edad10: "",
  });

  const [edadesMenores18, setEdadesMenores18] = useState("");
  const [edadesMayores18, setMayoresEdades18] = useState("");
  const [edades60, setEdades60] = useState("");
  const [parrafoMenores, setparrafoMenores] = useState("");
  const [parrafoMayores, setparrafoMayores] = useState("");
  const [parraAbuelos, setparrafoAbuelos] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    analizarEdades(edades);
  }, [edades]);

  function analizarEdades(objeto) {
    const edadess = Object.values(objeto);
    let menores18 = 0;
    let mayores18menores60 = 0;
    let mayores60menores100 = 0;
    let numeroMayorCien = false;
    for (let i = 0; i < edadess.length; i++) {
      if (edadess[i] < 18 && edadess[i] != 0) {
        menores18++;
      } else if (edadess[i] >= 18 && edadess[i] < 60) {
        mayores18menores60++;
      } else if (edadess[i] >= 60 && edadess[i] < 100) {
        mayores60menores100++;
      }  
    }
    // if (numeroMayorCien) {
    //   setError(true)
    // }
    setEdadesMenores18(menores18);
    setMayoresEdades18(mayores18menores60);
    setEdades60(mayores60menores100);
    setparrafoMenores("La cantidad de menores de edad en tu registro es: ");
    setparrafoMayores("La cantidad de mayores de edad en tu registro es: ");
    setparrafoAbuelos(
      "La cantidad de gente de la tercera edad en tu registro es: "
    );
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEdad((prevFormulario) => ({ ...prevFormulario, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    analizarEdades(edades);
  };

  const promedioEdadMenores = (objeto) => {
    const numerosMenores = [];
    const parrafoMenores = document.getElementById("edadesMenores");

    for (let clave in objeto) {
      if (typeof objeto[clave] === "number" && objeto[clave] < 18) {
        numerosMenores.push(objeto[clave]);
      }
    }

    // return numerosMenores.length;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEdad((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Wrapper>
      <FormularioWrapper error={error}>
       
        <FormularioEdades
          handleChange={handleChange}
          edades={edades}
          promedioEdadMenores={promedioEdadMenores}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
       
        ></FormularioEdades>
      </FormularioWrapper>

      <Container2>
        <div className="box">
          <p id="edadesMenores">
            {parrafoMenores} <br /><span>{edadesMenores18}</span>  personas
          </p>
          <div className="reductor">
            <Lottie animationData={nino}></Lottie>
          </div>
        </div>

        <div className="box">
          <p id="edadesMayores">
            {parrafoMayores} <br /> <span> {edadesMayores18}  </span>personas
          </p>
          <div className="reductor">
            <Lottie animationData={joven}></Lottie>
          </div>
        </div>
        <div className="box">
          <p id="edadesAncianos">
            {parraAbuelos} <br /> <span> {edades60}  </span>persona
          </p>
          <div className="reductor">
            <Lottie animationData={ancianito}></Lottie>
          </div>
        </div>
      </Container2>
    </Wrapper>
  );
};

export default Edades;
