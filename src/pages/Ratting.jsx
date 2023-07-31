import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 100vh auto;
  @media (max-width: 720px) {
    float: left;
    padding: 1px;
    display: block;
  }

  .contenedor-encuestas {
    background-color: #9747ff;
    display: grid;
    overflow-y: auto;

    padding: 12px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, minmax(50px, 200px));
    gap: 5px;

    @media only screen and (max-width: 600px) {
      padding: 25px;
      grid-template-columns: 0.88fr;
      margin-top:10px;
      grid-template-rows: 120px;
      row-gap: 20px;
      border-top: solid 3px black;
    }
  }
  .contenedor-formulario {
    display: flex;

    @media (max-width: 720px) {
      background-color: blue;
      width: 100%;
      height: 70%;
      padding: 1px 62px 0px 22px;
    }

    .error {
      display: block;
      background-color: #ff2848;
      color: #ffffff;
    }
    .noerror {
      display: none;
    }

    justify-content: center;
    align-items: center;
    .contenedor-formulario-form {
      background-color: blue;
      width: 100%;
      height: 70%;
      padding: 20px;

      @media (max-width: 720px) {
        #btn-mostrar-datos {
          margin-top: 100px;
        }
      }
      .container-btn {
        width:100%;
        display:flex;
        justify-content:center;
      } 

      .boton-enviar:hover {
        transform: scale(1.05);
        border-radius: 5px;
      }
      .boton-enviar {
        margin-top: 20px;
        padding: 10px;
        color: black;
        transition: all 0.8s;
        @media (max-width: 720px) {
          width: 60%;
        }
      }
      input {
        width: 100%;
        color: black;
        @media (max-width: 720px) {
          width: 100%;
        }
        @media (max-width: 400px) {
          width: 60%;
        }
      }
    }
  }
`;

const Ratting = () => {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [correo, setCorreo] = useState("");
  const [ciudadResidencia, setciudadResidencia] = useState("");
  const [ciudadOrigen, setciudadOrigen] = useState("");
  const [telefono, setTelefono] = useState("");
  const [baseDeDatosEncuestas, setbaseDeDatosEncuestas] = useState([]);
  const [correoExiste, setCorreoExiste] = useState(false);
  const errorMensaje = "ese correo ya existe";
  const sectionEncuestas = document.getElementById("contenedor-encuestas");

  const recorrerDatos = async (obj) => {
    while (sectionEncuestas.firstChild) {
      sectionEncuestas.removeChild(sectionEncuestas.firstChild);
      const div = document.createElement("div");
    }
    // for (let i = 0; i < obj.length; i++) {
    //   const element = obj[i];
    //   console.log(Object.keys(element))
    //   const texto = document.createElement("p")
    //   texto.innerText= element.name + "<br>" +  element.correo

    //   div.appendChild(texto)
    // }

    // ejemlplo de ensayo
    for (let i = 0; i < obj.length; i++) {
      const element = obj[i];
      const ficha = document.createElement("div");
      ficha.classList.add("ficha-usuario"); // Agrega una clase para aplicar estilos específicos a la ficha.

      const contenidoFicha = `
       <div id="contenedor-ficha">
       
       <p class="nombre">Nombre : ${element.name}</p>
       <p class="correo">Correo : ${element.correo}</p>
       <p class="FechaNacimiento">Fecha de nacimiento : ${element.fechaNacimiento}</p>
       <p class="ciudadResidencia"> Ciudad de Residencia : ${element.ciudadResidencia}</p>
       <p class="ciudadOrigen">Ciudad de origen : ${element.ciudadOrigen}</p>
       
       </div> 
      `;

      ficha.innerHTML = contenidoFicha;
      sectionEncuestas.appendChild(ficha);
    }

    sectionEncuestas.appendChild(div);
  };

  const datosPantalla = () => {
    recorrerDatos(baseDeDatosEncuestas);
  };

  const RecogerDatos = (event) => {
    event.preventDefault();

    const datos = new FormData(event.target);
    const datosFormulario = Object.fromEntries(datos);
    // const {name, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen, telefono} = datosFormulario

    const YaExisteCorreo = baseDeDatosEncuestas.some(
      (e) => e.correo == datosFormulario.correo
    );

    if (YaExisteCorreo) {
      setCorreoExiste(true);
      return true;
    }

    setCorreoExiste(false);
    setbaseDeDatosEncuestas([...baseDeDatosEncuestas, datosFormulario]);
    setCorreo("");

    // recorrerDatos(baseDeDatosEncuestas)
  };

  return (
    <>
      <Container>
        <div className="contenedor-formulario">
          <form
            onSubmit={RecogerDatos}
            className="contenedor-formulario-form"
            method="post"
            action=""
          >
            <h1 className={correoExiste ? "error" : "noerror"}>
              {errorMensaje}
            </h1>
            <label htmlFor="name">nombre</label>
            <br />
            <input
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              name="name"
            />
            <br />

            <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
            <br />
            <input
              type="date"
              value={fechaNacimiento}
              name="fechaNacimiento"
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
            <br />

            <label htmlFor="correo">Correo</label>
            <br />
            <input
              type="email"
              onChange={(e) => setCorreo(e.target.value)}
              required
              value={correo}
              name="correo"
            />
            <br />

            <label htmlFor="ciudadResidencia">Ciudad de residencia</label>
            <br />
            <input
              type="text"
              name="ciudadResidencia"
              onChange={(e) => setciudadResidencia(e.target.value)}
              value={ciudadResidencia}
            />
            <br />

            <label htmlFor="ciudadOrigen">Ciudad de origen</label>
            <br />
            <input
              type="text"
              name="ciudadOrigen"
              value={ciudadOrigen}
              onChange={(e) => setciudadOrigen(e.target.value)}
            />
            <br />

            <label htmlFor="telefono">Telefono</label>
            <br />
            <input
              type="text "
              name="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <br />
            <div className="container-btn">

            <input
              className="boton-enviar"
              type="submit"
              value={"ENVIAR ENCUESTA"}
            />

            </div>

            <div className="container-btn">

            <button
              id="btn-mostrar-datos"
              className="boton-enviar"
              onClick={datosPantalla}
            >
              mostrar datos en pantalla
            </button>

            </div>
          </form>
        </div>
   
        <div
          id="contenedor-encuestas"
          className="contenedor-encuestas "
        ></div>
      </Container>
    </>
  );
};

export default Ratting;

//   // grid-template-columns:   repeat(4, 1fr);
// grid-template-rows: 130px ;
