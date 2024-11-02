import React,{useState,useEffect} from 'react'

import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit-removebg-preview.png'
import doingIcon from "./assets/glowing-star-removebg-preview.png"
import doneIcon from "./assets/check-mark-button-removebg-preview.png"

const oldTasks=localStorage.getItem("tasks")
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
  const handleDelete=(taskIndex)=>{
        const newTasks=tasks.filter((task,index)=> index!== taskIndex)
        setTasks(newTasks)
  }
  
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}></TaskForm>
       <main className='app_main'>
        <TaskColumn title="To do" icon={todoIcon} tasks={tasks} handleDelete={handleDelete} status="todo"></TaskColumn>
        <TaskColumn title="Doing" icon={doingIcon} tasks={tasks} handleDelete={handleDelete} status="doing"></TaskColumn>
        <TaskColumn title="Done" icon={doneIcon} tasks={tasks} handleDelete={handleDelete} status="done"></TaskColumn>
       </main>
    </div>
  )
}

export default App