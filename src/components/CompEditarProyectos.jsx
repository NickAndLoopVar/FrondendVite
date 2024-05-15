import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//const URL = "http://localhost:5000/api/proyectos/";
const URL = "https://backendvite.onrender.com/api/proyectos"

const CompEditarProyectos = () => {
  const [nombre, setNombre] = useState("");
  const [framework, setFramework] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [duracion, setDuracion] = useState("");
  const [precio, setPrecio] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //Funcion actualizar

  const editarProyectos = async (e) => {
    e.preventDefault();
    await axios.patch(`${URL}${id}`, {
      nombre: nombre,
      framework: framework,
      lenguaje: lenguaje,
      plataforma: plataforma,
      duracion: duracion,
      precio: precio,
    });
    navigate("/proyectos");
  };
  useEffect(() => {
    getproyectosID();
  }, []);

  const getproyectosID = async () => {
    const resul = await axios.get(`${URL}${id}`);
    setNombre(resul.data.nombre);
    setFramework(resul.data.framework);
    setLenguaje(resul.data.lenguaje);
    setPlataforma(resul.data.plataforma);
    setDuracion(resul.data.duracion);
    setPrecio(resul.data.precio);
  };
  return (
    <div>
      <h3 className="p-3">Formulario Para Editar Proyectos</h3>
      <form onSubmit={editarProyectos}>
        <div className="m-3 w-50 mx-auto">
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Nombre"
          ></input>
        </div>

        <div className="m-3 w-50 mx-auto">
          <input
            value={framework}
            onChange={(e) => setFramework(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Framework"
          ></input>
        </div>

        <div className="m-3 w-50 mx-auto">
          <input
            value={lenguaje}
            onChange={(e) => setLenguaje(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Lenguaje"
          ></input>
        </div>

        <div className="m-3 w-50 mx-auto">
          <input
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Plataforma"
          ></input>
        </div>

        <div className="m-3 w-50 mx-auto">
          <input
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Duracion"
          ></input>
        </div>

        <div className="m-3 w-50 mx-auto">
          <input
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="number"
            className="form-control"
            placeholder="Precio"
          ></input>
        </div>

        <button type="submit" className="btn btn-primary m-4 btn-sm">
          Guardar Cambios <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
};
export default CompEditarProyectos;
