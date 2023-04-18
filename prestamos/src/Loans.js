import React, {useState} from "react";

const Form = (props) =>{
    const onSubmit = (e) =>{
        props.cambiarForm(true)
    };

    return(
        <>
            <form action="" onSubmit={onSubmit}>
                <div>
                    <h1>Hola Bienvenido al formulario de los prestamos</h1>
                    <h2>Ingese sus datos</h2>
                </div>
                <div>
                    <label htmlFor="id">Matricula</label>
                    <input type="number"></input>
                </div>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label htmlFor="lastname">Apellido</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Lista de materiales:</label>
                    <textarea rows="4" cols="50"></textarea>
                </div>
                <div>
                    <button type="submit" class="btn btn-success">Aceptar</button>
                </div>
            </form>
        </>
    );
};

export default Form;