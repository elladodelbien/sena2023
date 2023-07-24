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
    margin:10px;
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
    height:auto;
    padding-bottom:20px;
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
  const scrolleable = document.getElementById("scrolleable")
  // fin de ensayo
  const [widthT, setWidthT] = useState("");
  const [hipottenusa, sethipottenusa] = useState("");
  const [width, setWidth] = useState("");
  const [heightT, setHeightT] = useState("");
  const [heightC, setHeightC] = useState("");
  const [weightC, setWeightC] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState("");
  const [areaCuadrado,setAreaCuadrado]=useState("")
  const [perimetroCuadrado,setperimetroCuadrado]=useState("")
  
  const scrollButton = document.getElementById("scrollButton")
  const texto = "Calcular";
  // const perimetroDelTriangulo=localStorage.getItem("perimetroTriangulo")
  // const areaDelTriangulo= localStorage.getItem("rectangleAreaTriangulo")
 
  const [perimetroDelTriangulo, setperimetroDelTriangulo]= useState("")
  const [areaDelTriangulo, setareaDelTriangulo]= useState("")
  

  const [perimetro, setPerimetro] = useState("");
  const BorrarStorage = () => {
    localStorage.clear();
    setArea("");
    setPerimetro("");
    setareaDelTriangulo("")
    setperimetroDelTriangulo("")
    setperimetroCuadrado("")
    setAreaCuadrado("")
  }



  


  // inicio de maniobras de registro de base y alturas
  const handleWidthChange = (event) => {
    const value = event.target.value;
    setWidth(value);
  };
  const handleWidthTChange = (event) => {
    const value = event.target.value;
    setWidthT(value);
  };
  
  const handleHeightTChange = (event) => {
    const value = event.target.value;
    setHeightT(value);
  };
  const handleHeightChange = (event) => {
    const value = event.target.value;
    setHeight(value);
  };
  const handleHipotenusa = (event) => {
    const value = event.target.value;
    sethipottenusa(value);
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

    
      scrolleable.scrollIntoView({
        behavior: "smooth", // Desplazamiento suave
        block: "start",     // Posición en la que el elemento objetivo se colocará en la parte superior de la ventana
      });
    
  
    
  };

  const CalcularTriangulo =()=> {
    const catetoAdy = parseFloat(widthT)
    const altura = parseFloat(heightT)
    const hipotenu = parseFloat(hipottenusa)
    const areaT = (catetoAdy * altura) / 2;
    const perimetroT = catetoAdy + altura + hipotenu
    
    setareaDelTriangulo(areaT)
    setperimetroDelTriangulo(perimetroT)
    
    localStorage.setItem("rectangleAreaTriangulo", areaT);
    
    localStorage.setItem("perimetroTriangulo",perimetroT)



    




    const PerTri = document.getElementById("perimetroTriangulo")    
    const triangulo = document.getElementById("Triangulo")
    PerTri.innerText="El perimetro de tu triangulo es :"
    triangulo.innerText="El area de tu triangulo es : "
    

    
      scrolleable.scrollIntoView({
        behavior: "smooth", // Desplazamiento suave
        block: "start",     // Posición en la que el elemento objetivo se colocará en la parte superior de la ventana
      });
    
  }



  const CalcularCuadrado =()=> {
    const lado1 = parseFloat(weightC)
    
    
    const areaC = lado1 * 2;
    const perimetroC = lado1 * 4
    
    setAreaCuadrado(areaC)
    setperimetroCuadrado(perimetroC)
    
   


    




    const PerCuadrado = document.getElementById("perimetroCuadrado")    
    const cuadrado = document.getElementById("cuadrado")
    PerCuadrado.innerText="El perimetro de tu cuadrado es :"
    cuadrado.innerText="El area de tu cuadrado es : "
    

    
      scrolleable.scrollIntoView({
        behavior: "smooth", // Desplazamiento suave
        block: "start",     // Posición en la que el elemento objetivo se colocará en la parte superior de la ventana
      });
    
  }



  // 
  return (
    <Wrapper>
      <article className="col-1">
        <BotonesFiguras
          funcionb={handleWidthChange}
          calculo={calculateAreaRectangulo}
          CalcularTriangulo={CalcularTriangulo}
          funcionh={handleHeightChange}
          texto={texto}
          width={width}
          wid={"300px"}
          heig={"350px"}
          handleWidthTChange={handleWidthTChange}
          handleHeightTChange={handleHeightTChange}
          handleHipotenusa={handleHipotenusa}   
          heightC={heightC}
          setHeightC={setHeightC} 
          weightC={weightC}
          setWeightC={setWeightC}
          CalcularCuadrado={CalcularCuadrado}
          
          
          />
          

       
        
        <Lottieimg />
       
   
       
    
      </article>


      <article id="scrolleable" className="Clmn2">
        <div  className="columna-2">
          
          
          
          <div className="redd">
           <h1 id="recttangulo"></h1>
            <p className="p-rectangulo">{area}</p>
            <h2  id="perimetroRectangulo"></h2>
            <p className="pr-rectangulo">{perimetro}</p>
            
          <button id="btn-clear" onClick={BorrarStorage} > CLEAR</button>
          </div>
          
          <div className="blues">
          <h1 id="Triangulo"></h1>
            <p className="p-rectangulo">{areaDelTriangulo}</p>
            <h2  id="perimetroTriangulo"></h2>
            <p className="pr-rectangulo">{ perimetroDelTriangulo}</p>
            
          <button id="btn-clear" onClick={BorrarStorage} > CLEAR</button>
          </div>



          <div className="yellow ">
          <h1 id="cuadrado"></h1>
          <p className="p-rectangulo">{areaCuadrado}</p>
            <h2  id="perimetroCuadrado"></h2>
            <p className="pr-rectangulo">{ perimetroCuadrado}</p>
            
          <button id="btn-clear" onClick={BorrarStorage} > CLEAR</button>
          </div>

        {/* <p className="">{area}</p> */}
        </div>
       
      </article>
    </Wrapper>
  );
};

export default Home;
