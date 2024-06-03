import React from "react";
import '../../styles/cards.css';


const Cards = ({ tituloFoto, textoFoto, imagen }) => {
    return (
        <div class="card tarjeta ">
            <img src={imagen} class="imagen" alt="..." />
            <div class="card-body ">
                <h5 class="card-title tituloTarjeta">{tituloFoto}</h5>
                <p class="card-text textoTarjeta">{textoFoto}</p>
            </div>
            <div class="card-footer d-flex justify-content-center">
            <a href="#" className="btn btn-primary">Saber más</a>
            </div>
        </div>
    );
};

export default Cards;


