import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './Loans';
import Card from './Cards';

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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

