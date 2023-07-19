import { styled } from "styled-components";
import logo from "../assets/sena.png";
import { AiOutlineCaretLeft } from "react-icons/ai";

import BotonesSidebar from "./BotonesSidebar";


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const BarraOculta= () => {
    setSidebarOpen((sidebarOpen) => (sidebarOpen === true ? false : true));
  };

  const SizeFont =  sidebarOpen ? `15px` : `8px`
  return (
    <Container isopen={sidebarOpen}>
      <div className="Logocontent">
        <div onClick={BarraOculta} className="Sidebarbutton">
          <AiOutlineCaretLeft />
        </div>
        <div className="imgcontent">
          <img src={logo} alt="" />
        </div>
        <h2>
          Evidencias <br /> Sena
        </h2>
      </div>
      <BotonesSidebar
      link="/"
      size="29px"    
      backgroundcolor={"#9747FF"}
      text="EVIDENCIA 1"
      textLink="CALCULO DE AREAS Y PERIMETROS"
      open={sidebarOpen}
      fontSize={SizeFont}
     
      />
      <BotonesSidebar
      link="/edades"
      size="29px"    
      backgroundcolor={"#9747FF"}
      text="EVIDENCIA 2"
      textLink="AGRUPACION DE VECTORES"
      open={sidebarOpen}
      fontSize={SizeFont}
     
      />
      <BotonesSidebar
      link="/edades"
      size="29px"    
      backgroundcolor={"#9747FF"}
      text="EVIDENCIA 1"
      textLink="RATTING DE CANCIONES"
      open={sidebarOpen}
      fontSize={SizeFont}
     
      />
      <BotonesSidebar
      link="/edades"
      size="29px"    
      backgroundcolor={"#9747FF"}
      text="EVIDENCIA 1"
      textLink="Promedio de edades ingresadas"
      open={sidebarOpen}
      fontSize={SizeFont}
      
     
      />
    
      
    </Container>
  );
};
const Container = styled.div`
  background: ${(props) => props.theme.bg1};
  color: ${(props) => props.theme.white};
  
  @media (max-width: 768px) {
    position: sticky;
    width:100%;
    
  }

  position: fixed;
  display: flex;
  padding: 15px;
  flex-direction: column;
  transition: all 0.9s;
  height:100vh;
  font-size:4px;
  width: ${({ isopen }) => (isopen ? `250px` : `100px`)};
  
 
  @media (max-width: 768px) {
    height:auto;
    padding:30px;
    max-width: 100vw;
  }

  .Sidebarbutton {
    position: absolute;
    top: ${({ isopen }) => (isopen ? `111px` : ``)};
    @media (max-width: 768px) {
      opacity: 0;
    }
    right: -16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #595695;
    cursor: pointer;
    transition: all 0.3s;
    border: solid 1px;
    
  }

  .Logocontent {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0px;
    text-align: center;
    font-size: 15px;
    height: auto;

    h2 {
      display: ${({ isopen }) => (!isopen ? `none` : `block`)};
      margin: 9px; 
     
    }

    .imgcontent {
      display: flex;
      cursor: pointer;
      transition: all 1s;
      transform: ${({ isopen }) => (isopen ? `scale(0.3)` : `scale(0.2)`)};
      margin: -123px; 

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
`;

export default  Sidebar ;
