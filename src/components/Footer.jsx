import React from "react";
import github from "../img/github.png"
// import redes from "../imagenes/redes.png"

const Footer = () => {
    return(
        <div>
            <div className="card-body">
                <h3 className="card-titel">Calle 50s #30-25</h3>
                <p className="card-text">example@gmail.com, 3193524650,</p>
                <img src={github} className="w-25" alt="logo"></img>
            </div>
            <div className="card-footer text-muted">10:00 a 18:00</div>
        </div>
    )
}

export default Footer;