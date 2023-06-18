import { styled } from "styled-components";
import logo from "../assets/sena.png";
import { AiOutlineCaretLeft } from "react-icons/ai";
import BotonesEnlace from "./BotonesEnlace";


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const BarraOculta= () => {
    setSidebarOpen((sidebarOpen) => (sidebarOpen === true ? false : true));
  };
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
      <BotonesEnlace
        text="Evidencia numero 1"
        link="/home"
        size="23px"
        backgroundColor="#9747FF"
      />
      <BotonesEnlace
        text="Evidencia numero 2"
        link="/edades"
        size="23px"
        backgroundColor="#9747FF"
      />
    </Container>
  );
};
const Container = styled.div`
  background: ${(props) => props.theme.bg1};
  color: ${(props) => props.theme.white};
  position: sticky;
  display: flex;
  padding: 15px;
  flex-direction: column;
  transition: transform 0.5s, background-color 0.3s;

  .Sidebarbutton {
    position: absolute;
    top: ${({ isopen }) => (isopen ? `111px` : ``)};
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
      margin-top: -38px; 
     
    }

    .imgcontent {
      display: flex;
      cusor: pointer;
      transition: all 1s;
      transform: ${({ isopen }) => (isopen ? `scale(0.4)` : `scale(0.5)`)};
      margin: -70px; /* Ajusta el valor según tus preferencias */

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
`;

export { Sidebar };
