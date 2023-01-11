import React, {useState, useEffect} from 'react'
import ToDoList from '../../components/ToDoList'

export default function () {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
     

  }, [])
  


  return (
    <div>
      <h1>To Dp List</h1>
      <ToDoList todos={todos}/>
    </div>
  )
}
