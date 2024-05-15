import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//const URL = "http://localhost:5000/api/clientes/";
const URL = "https://backendvite.onrender.com/api/clientes/"

const CompMostrarClientes = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    getClientes();
  }, []);

  //Funcion para mostrar los clientes

  const getClientes = async () => {
    const resul = await axios.get(URL);
    setClientes(resul.data);
  };

  //Funcion eliminar clientes

  const eliminarClientes = async (id) => {
    await axios.delete(`${URL}${id}`);
    getClientes();
  };

  return (
    <div className="table-responsive-sm">
      <div className="row">
        <div className="col">
          <Link to="/clientes/agregar" className="btn btn-warning m-4 btn-sm">
            Agregar Clientes <i className="fa-solid fa-user-plus"></i>
          </Link>
          <table className="table table-responsive table-hover table-bordered table-sm table align-middle shadow-lg">
            <thead className="table-dark">
              <tr>
                <th>Nombres Cliente</th>
                <th>Apellido Cliente</th>
                <th>Documento</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => (
                <tr key={index}>
                  <td>{cliente.nombres}</td>
                  <td>{cliente.apellidos}</td>
                  <td>{cliente.documento}</td>
                  <td>{cliente.correo}</td>
                  <td>{cliente.telefono}</td>
                  <td>{cliente.direccion}</td>
                  <td>
                    <Link
                      to={`/clientes/editar/${cliente._id}`}
                      className="btn btn-outline-success m-1 btn-sm"
                    >
                      Editar <i className="fa-solid fa-user-pen"></i>
                    </Link>
                    <button
                      onClick={() => eliminarClientes(cliente._id)}
                      className="btn btn-outline-danger m-1 btn-sm"
                    >
                      Eliminar <i className="fa-solid fa-user-minus"></i>
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
export default CompMostrarClientes;
