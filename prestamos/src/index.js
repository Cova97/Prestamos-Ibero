import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './Loans';
import Card from './Cards';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () =>{
  const[form, cambiarForm] = useState(true);
  const [users, setUsers] = useState([]);
  
  const addNewUser = (user) => {
    setUsers([...users, user]);
    cambiarForm(true);
  }

  return(
    <>
      {form === true ? (
        <>
          <div>
            <h1>Alumnos con materiales prestados</h1>
          </div>
          <div>
            {users.map((user, index) => (
                <Card key={index} id={user.id} name={user.name} lastname={user.lastname} items={user.items} />
              ))}
          </div>
          <div>
            <button class="btn btn-info" onClick={()=> cambiarForm(false)} >Nuevo Prestamo</button>
          </div>
        </>
      ) : (
        <>
          <Form cambiarForm={addNewUser}/>
        </>
      )}
    </>
  );
};

root.render(<Jsx/>)




