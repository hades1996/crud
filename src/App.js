
import React,{ useState} from 'react'
import { isEmpty } from 'lodash';

function App() {
  const [task, setTask] = useState("")
  const addTask=(e)=>{
    e.preventDefault()
      if (isEmpty(task)){
        console.log("Task empety")
        return
      }
    console.log("ok")
    setTask("")
  }
  return (
    <div className='container mt-5'>
      <h1>tareas</h1>
      <hr/>
      <div className='row'>
        <div className='col-8'>
          <h4 className='text-center'>lista de tareas</h4>
          <ul className='list-group'>
            <li className='list-group-item'>
              <span className='lead'>nombre de la tarea</span>
              <button className='btn btn-danger btn-sm float-right mx-2'>eliminar</button>
              <button className='btn btn-warning btn-sm float-right'>editar</button>
            </li>
          </ul>
        </div>
        <div className='col-4'> 
          <h4 className='text-center'>formulario</h4>
          <form onSubmit={addTask}>
            <input 
            type="text" 
            className='form-control mb-2'
            placeholder='ingrese la tarea...'
            onChange={(text)=> setTask(text.target.value)}
            value={task}></input>
            <button 
            className='btn btn-dark btn-block'
            type='submit'>agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
