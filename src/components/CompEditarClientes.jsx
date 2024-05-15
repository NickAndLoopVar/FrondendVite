import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = "http://localhost:5000/api/clientes/";

const CompEditarClientes = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //Funcion actualizar

  const editarClientes = async (e) => {
    e.preventDefault();
    await axios.patch(`${URL}${id}`, {
      nombres: nombres,
      apellidos: apellidos,
      documento: documento,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
    });

    navigate("/clientes");
  };
  useEffect(() => {
    getclientesID();
  }, []);

  const getclientesID = async () => {
    const resul = await axios.get(`${URL}${id}`);
    setNombres(resul.data.nombres);
    setApellidos(resul.data.apellidos);
    setDocumento(resul.data.documento);
    setCorreo(resul.data.correo);
    setTelefono(resul.data.telefono);
    setDireccion(resul.data.direccion);
  };

  return (
    <div>
      <h3 className="p-3">Formulario Para Editar Cliente</h3>
      <form onSubmit={editarClientes}>
        <div className="m-3 w-50 mx-auto">
          <input
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Nombres"
          ></input>
        </div>

        <div className="m-3 w-50 mx-auto">
          <input
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Apellidos"
          ></input>
        </div>

        <div className="m-3 w-50 mx-auto">
          <input
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            type="number"
            className="form-control"
            placeholder="Documento"
          ></input>
        </div>

        <div className="m-3 w-50 mx-auto">
          <input
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Correo"
          ></input>
        </div>

        <div className="m-3 w-50 mx-auto">
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="number"
            className="form-control"
            placeholder="Telefono"
          ></input>
        </div>

        <div className="m-3 w-50 mx-auto">
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Direccion"
          ></input>
        </div>

        <button type="submit" className="btn btn-primary m-4 btn-sm">
          Guardar Cambios <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
};

export default CompEditarClientes;
