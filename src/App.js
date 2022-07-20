
import React,{ useState} from 'react'
import { isEmpty } from 'lodash';
import shortid from 'shortid';

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask=(e)=>{
    e.preventDefault()
      if (isEmpty(task)){
        console.log("Task empety")
        return
      }

      const newTask={
        id: shortid.generate(),
        name: task
      }

      setTasks([...tasks,newTask])
    
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
            {
              tasks.map((task)=>(
            <li className='list-group-item' key={task.id}>
              <span className='lead'>{task.name}</span>
              <button className='btn btn-danger btn-sm float-right mx-2'>eliminar</button>
              <button className='btn btn-warning btn-sm float-right'>editar</button>
            </li>
            ))
            }
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
