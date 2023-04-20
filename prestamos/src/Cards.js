import React, {useState} from "react";

const Card = ({formData}) => {
    const { id, name, lastname, items } = formData;
    
    const [isVisible, setIsVisible] = useState(true);
    const handleDelete = () => {setIsVisible(false);};
    
    return isVisible ?(
        <>
            
            <div className="card">
                <h2>Nombre: {name}</h2>
                <h2>Apellido: {lastname}</h2>
                <p>ID: {id}</p>
                <p>Materiales: {items}</p>
                <button type="button" class="btn btn-warning" onClick={handleDelete}>Eliminar</button>
            </div>
        </>
    ) : null
};

export default Card;