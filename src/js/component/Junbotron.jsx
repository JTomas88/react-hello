import React from 'react';
import '../../styles/junbotron.css';

const Junbotron = ({ titleJunbo, textJunbo }) => {
    return (
        <div className="container-fluid mt-4 mb-4 contenedor-Junbotron">
            <div className="card p-1 ">
                <div className="card-body junbotron">
                    <h1 className="card-title text-start">{titleJunbo}</h1>
                    <p className="card-text text-start">{textJunbo}</p>
                    <a href="#" className="btn btn-primary col-12 col-md-3 d-grid">Definición completa</a>                        </div>
            </div>
        </div>
    );
};

export default Junbotron;
