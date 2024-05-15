import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//const URL = "http://localhost:5000/api/clientes/";
const URL = "https://backendvite.onrender.com/api/clientes"

const CompCrearClientes = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();

  //Creamos la funcion guardar

  const guardarClientes = async (e) => {
    e.preventDefault();
    await axios.post(URL, {
      nombres: nombres,
      apellidos: apellidos,
      documento: documento,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
    });
    navigate("/clientes");
  };
  return (
    <div>
      <h3 className="p-5">Formulario Para Guardar Cliente</h3>
      <form onSubmit={guardarClientes}>
        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            type="text"
            className="form-control shadow"
            placeholder="Nombres"
          ></input>
          <label for="floatingInput">Nombres</label>
        </div>

        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            type="text"
            className="form-control shadow"
            placeholder="Apellidos"
          ></input>
          <label for="floatingInput">Apellidos</label>
        </div>

        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            type="number"
            className="form-control shadow"
            placeholder="Documento"
          ></input>
          <label for="floatingInput">Documento</label>
        </div>

        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            type="text"
            className="form-control shadow"
            placeholder="Correo"
          ></input>
          <label for="floatingInput">Correo</label>
        </div>

        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="number"
            className="form-control shadow"
            placeholder="Telefono"
          ></input>
          <label for="floatingInput">Teléfono</label>
        </div>

        <div className="form-floating m-3 w-75 mx-auto">
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            className="form-control shadow"
            placeholder="Direccion"
          ></input>
          <label for="floatingInput">Dirección</label>
        </div>

        <button type="submit" className="btn btn-primary m-4 btn-sm">
          Guardar Cliente <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
};
export default CompCrearClientes;
