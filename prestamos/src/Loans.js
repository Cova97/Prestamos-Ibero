import React, {useState} from "react";

const Form = (props) => {
    const[id, setId] = useState("")
    const[name, setName] = useState("")
    const[lastname, setLastname] = useState("")
    const[items, setItems] = useState("")
    
    const onChange = (e) => {
        console.log(e.target.name);
        if(e.target.name === "id"){
            setId(e.target.value);
        }
        if(e.target.name === "name"){
            setName(e.target.value);
        }
        if(e.target.name === "lastname"){
            setLastname(e.target.value);
        }
        if(e.target.name === "items"){
            setItems(e.target.value);
        }
    };

    const onSubmit = (e) =>{
        console.log(e);
        e.preventDefault();
        if(id && name && lastname && items !== null){
            alert("Nuevo Usuario Deudor")
            props.cambiarForm(true)
        }
        else{
            alert("Faltan datos para aceptar el prestamos")
        }
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
                    <input 
                        type="number"
                        name="id" 
                        id="id" 
                        value={id} 
                        onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name} 
                        onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="lastname">Apellido</label>
                    <input 
                        type="text" 
                        name="lastname"
                        id="lastname"
                        value={lastname}
                        onChange={onChange}></input>
                </div>
                <div>
                    <label htmlFor="items">Lista de materiales:</label>
                    <textarea 
                        rows="4" cols="50"
                        name="items"
                        id="items"
                        value={items}
                        onChange={onChange}></textarea>
                </div>
                <div>
                    <button type="submit" class="btn btn-success">Aceptar</button>
                </div>
            </form>
        </>
    );
};

export default Form;