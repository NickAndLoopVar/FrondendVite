import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//const URL = "http://localhost:5000/api/proyectos/";
const URL = "https://backendvite.onrender.com/api/proyectos/"

const CompCrearProyectos = () => {
  const [nombre, setNombre] = useState("");
  const [framework, setFramework] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [duracion, setDuracion] = useState("");
  const [precio, setPrecio] = useState("");
  const navigate = useNavigate();

  //Creamos la funcion guardar

  const guardarProyectos = async (e) => {
    e.preventDefault();
    await axios.post(URL, {
      nombre: nombre,
      framework: framework,
      lenguaje: lenguaje,
      plataforma: plataforma,
      duracion: duracion,
      precio: precio,
    });
    navigate("/proyectos");
  };
  return (
    <div>
      <h3 className="p-5">Formulario Para Guardar Proyectos</h3>
      <form onSubmit={guardarProyectos}>
        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control shadow"
            placeholder="Nombre"
          ></input>
          <label for="floatingInput">Nombre</label>
        </div>

        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={framework}
            onChange={(e) => setFramework(e.target.value)}
            type="text"
            className="form-control shadow"
            placeholder="Framework"
          ></input>
          <label for="floatingInput">Framework</label>
        </div>

        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={lenguaje}
            onChange={(e) => setLenguaje(e.target.value)}
            type="text"
            className="form-control shadow"
            placeholder="Lenguaje"
          ></input>
          <label for="floatingInput">Lenguaje</label>
        </div>

        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
            type="text"
            className="form-control shadow"
            placeholder="Plataforma"
          ></input>
          <label for="floatingInput">Plataforma</label>
        </div>

        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            type="text"
            className="form-control shadow"
            placeholder="Duración"
          ></input>
          <label for="floatingInput">Duración</label>
        </div>

        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="number"
            className="form-control shadow"
            placeholder="Precio"
          ></input>
          <label for="floatingInput">Precio</label>
        </div>

        <button type="submit" className="btn btn-primary m-4 btn-sm">
          Guardar Proyecto <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
};
export default CompCrearProyectos;
