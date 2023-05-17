import React, {useState, useEffect} from "react";
import {db} from './Firebase';
import { addDoc, Timestamp, onSnapshot, collection} from 'firebase/firestore';

const Form = (props) => {
    const[id, setId] = useState("")
    const[name, setName] = useState("")
    const[lastname, setLastname] = useState("")
    const[items, setItems] = useState([])
    const[loans, setLoans] = useState([]);
    
    useEffect(() => {
        onSnapshot(
            collection(db, 'loans'),
            (snapshot) => {
                
                const arr = snapshot.docs.map((doc) => {
                    return{...doc.data(), id: doc.id}
                })
                console.log(arr)
                setLoans(arr);
            },
            (error) =>{
                console.log(error)
            }
        )
    }, []);

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

    const onSubmit = async (e) =>{
        e.preventDefault();
        try {
            await addDoc(collection(db, 'loads'), {
                id:id,
                name:name,
                lastname:lastname,
                items:items
            });
        } catch(error){
            console.log("hubo un error")
            console.log(error)
        }
        setId("");
        setName("");
        setLastname("");
        setItems("");
    }

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
                    <button type="submit" class="btn btn-success">Aceptar Préstamo</button>
                </div>
            </form>
        </>
    );
};

export default Form;

/*
try {
            console.log(e);
            e.preventDefault();
            if(id && name && lastname && items !== null){
                const docRef = await addDoc(collection(db, "loans"), {
                    id: id,
                    name: name,
                    lastname: lastname,
                    items: items,
                    timestamp: Timestamp.fromDate(new Date())
                });
                console.log("Document written with ID: ", docRef.id);
                alert("Nuevo Usuario Deudor")
                props.cambiarForm(true)
            }
            else{
                alert("Por favor complete todos los campos para aceptar el préstamo")
            }
        } catch (e) {
            console.error("Error adding document: ", e);
            alert("Ha ocurrido un error al enviar el formulario. Por favor inténtelo de nuevo más tarde.");
        }
*/