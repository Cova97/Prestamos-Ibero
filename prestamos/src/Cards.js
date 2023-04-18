import React from "react";

const Card = (promps) => {
    return(
        <>
            <div class="card">
                <h2>Nombre: Aldo</h2>
                <h2>Apellido: Cova</h2>
                <p>ID: 186223</p>
                <p>Materiales: USB, Telcado</p>
                <button class="btn" onclick="eliminarCard(this.parentNode)">Eliminar</button>
            </div>
        </>
    );
};

export default Card;