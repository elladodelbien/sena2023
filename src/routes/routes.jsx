import {  Routes,  Route } from "react-router-dom";
import Home from "../pages/Home";
import Ratting from "../pages/Ratting";
import Edades from "../pages/Edades";
import Pruebas from "../pages/Pruebas";





export function MyRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ratting" element={<Ratting/>}></Route>
        <Route path="/edades" element={<Edades/>}></Route>
        <Route path="/pruebas" element={<Pruebas/>}></Route>
      </Routes>
  
  );
}
