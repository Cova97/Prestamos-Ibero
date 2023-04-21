import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './Loans';
import Card from './Cards';
import './Firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () =>{
  const[form, cambiarForm] = useState(true);
  
  return(
    <>
      {form === true ? (
        <>
          <div>
            <h1>Alumnos con materiales prestados</h1>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <button class="btn btn-info" onClick={()=> cambiarForm(false)} >Nuevo Prestamo</button>
          </div>
        </>
      ) : (
        <>
          <Form cambiarForm={cambiarForm}/>
        </>
      )}
    </>
  );
};

root.render(<Jsx/>)




