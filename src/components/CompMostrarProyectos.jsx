import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//const URL = "http://localhost:5000/api/proyectos/";
const URL = "https://backendvite.onrender.com/api/proyectos"
const CompMostrarProyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  useEffect(() => {
    getProyectos();
  }, []);

  //Funcion para mostrar los proyectos

  const getProyectos = async () => {
    const resul = await axios.get(URL);
    setProyectos(resul.data);
  };

  //Funcion para eliminar proyectos

  const eliminarProyectos = async (id) => {
    await axios.delete(`${URL}${id}`);
    getProyectos();
  };

  return (
    <div className="table-responsive-sm">
      <div className="row">
        <div className="col">
          <Link to="/proyectos/agregar" className="btn btn-warning m-4 btn-sm">
            Agregar Proyectos <i className="fa-solid fa-diagram-project"></i>
          </Link>
          <table className="table table-hover table-bordered table-sm table align-middle shadow-lg">
            <thead className="table-dark">
              <tr>
                <th>Nombres Proyecto</th>
                <th>Framework</th>
                <th>Lenguaje</th>
                <th>Plataforma</th>
                <th>Duración</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proyectos.map((proyecto, index) => (
                <tr key={index}>
                  <td>{proyecto.nombre}</td>
                  <td>{proyecto.framework}</td>
                  <td>{proyecto.lenguaje}</td>
                  <td>{proyecto.plataforma}</td>
                  <td>{proyecto.duracion}</td>
                  <td>{proyecto.precio}</td>
                  <td>
                    <Link
                      to={`/proyectos/editar/${proyecto._id}`}
                      className="btn btn-outline-success m-1 btn-sm"
                    >
                      Editar <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => eliminarProyectos(proyecto._id)}
                      className="btn btn-outline-danger m-1 btn-sm"
                    >
                      Eliminar <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CompMostrarProyectos;
