import { styled } from "styled-components";
import Lottieimg from "../components/Lottieimg";
import BotonesFiguras from "../components/BotonesFiguras";
import { useState } from "react";


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr  1fr;
  height: 180vh;
  #btn-clear {
    width:100px;
    border-radius:10px;
    background:#da1647;
    padding:10px;
  }
  #recttangulo, #perimetroRectangulo {
    color:#000f0f;
  }
  .col-1 {
    display:flex;
    flex-direction:column;    
    margin-left: -44px;
    @media (max-width: 768px) {
      grid-template-columns: auto;
      margin-left:30px;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
    
  }
 
  .Clmn2 {
 margin:6px;
 padding:2px;
   
  }
  .p-rectangulo, .pr-rectangulo{
    font-size:52px;
    color:#141414;
  }
`;

const Home = () => {
  // ensayo de codigo de oculta formulario

  // fin de ensayo
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState("");
  const [perimetro, setPerimetro] = useState("");
  const BorrarStorage = () => {
    localStorage.clear();
    setArea("");
    setPerimetro("");
  }

  const texto = "Calcular";

  // inicio de maniobras de registro de base y alturas
  const handleWidthChange = (event) => {
    const value = event.target.value;
    setWidth(value);
  };
  0;
  const handleHeightChange = (event) => {
    const value = event.target.value;
    setHeight(value);
  };
// funcion calculo de area y perimetro de rectangulo
  const calculateAreaRectangulo = () => {

    const base = parseFloat(width)
    const altura = parseFloat(height)
    const area = base * altura;
    const perimetro = 2 * (base + altura)
    setWidth("");
    localStorage.setItem("rectangleArea", area);
    localStorage.setItem("rectanglePerimetrer", perimetro);

    const descripcionRectanguloPerimetro = document.getElementById("perimetroRectangulo")    
    const descripcionRectangulo = document.getElementById("recttangulo")
    descripcionRectanguloPerimetro.innerText="El perimetro de tu rectangulo es :"
    descripcionRectangulo.innerText="El area de tu rectangulo es : "
    setArea(area);
    setPerimetro(perimetro);
    
  };


  // 
  return (
    <Wrapper>
      <article className="col-1">
        <BotonesFiguras
          funcionb={handleWidthChange}
          calculo={calculateAreaRectangulo}
          funcionh={handleHeightChange}
          texto={texto}
          width={width}
          wid={"300px"}
          heig={"350px"}
          />
          

       
        
        <Lottieimg />
       
   
       
    
      </article>


      <article className="Clmn2">
        <div  className="columna-2">
          <div className="redd">
           <h1 id="recttangulo"></h1>
            <p className="p-rectangulo">{area}</p>
            <h2  id="perimetroRectangulo"></h2>
            <p className="pr-rectangulo">{perimetro}</p>
            
          <button id="btn-clear" onClick={BorrarStorage} > CLEAR</button>
          </div>
          
          <div className="blues">
            <p></p>
          </div>
          <div className="yellow ">
            <p></p>
          </div>

        {/* <p className="">{area}</p> */}
        </div>
       
      </article>
    </Wrapper>
  );
};

export default Home;
