import React, {useState} from 'react'


 function Todo(){

   const [todos , setTodo] = useState("")

   const [tasks , setTasks] = useState([])
    const addTask=()=>{
        if(todos==="")return
        setTasks([...tasks , todos])
        setTodo("")
    }
    const deleteTask=(index)=>{
        setTasks(tasks.filter((task , i)=>i!==index))
    }
    return(
        <>
            <h1>Todo-List</h1>
            <input type='text' value={todos} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter your task....'/>
            <button onClick={addTask}>Add Task</button>
            <ul>
               {tasks.map((item , index)=>(
                <li key={index}>
                    {item}
                    <button onClick={()=>deleteTask(index)}>delete</button>
                </li>
               ))}
            </ul>
        </>
    )
    
 }
 export default Todo