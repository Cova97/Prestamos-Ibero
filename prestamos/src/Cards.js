import React, {useState} from "react";

const Card = () => {
    
    const [isVisible, setIsVisible] = useState(true);
    const handleDelete = () => {setIsVisible(false);};
    
    return isVisible ?(
        <>
            <div className="card">
                <h2>Nombre: </h2>
                <h2>Apellido: </h2>
                <p>ID: </p>
                <p>Materiales: </p>
                <button type="button" className="btn btn-warning" onClick={handleDelete}>Eliminar</button>
            </div>
        </>
    ) : null;
};

export default Card;