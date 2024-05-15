import "./App.css";
//Importamos los componentes Clientes
import CompMostrarClientes from "./components/CompMostrarClientes";
import CompCrearClientes from "./components/CompCrearClientes";
import CompEditarClientes from "./components/CompEditarClientes";
//Importamos los componentes Proyectos
import CompMostrarProyectos from "./components/CompMostrarProyectos";
import CompCrearProyectos from "./components/CompCrearProyectos";
import CompEditarProyectos from "./components/CompEditarProyectos";
//Importamos router
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/clientes/" element={<CompMostrarClientes />} />
          <Route path="/clientes/agregar/" element={<CompCrearClientes />} />
          <Route path="/clientes/editar/:id" element={<CompEditarClientes />} />
          <Route path="/proyectos/" element={<CompMostrarProyectos />} />
          <Route path="/proyectos/agregar/" element={<CompCrearProyectos />} />
          <Route
            path="/proyectos/editar/:id"
            element={<CompEditarProyectos />}
          />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
