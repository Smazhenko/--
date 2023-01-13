import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import ToDoList from '../../components/ToDoList';
import {getTasks, createTask} from '../../api/taskApi';
import ToDoForm from '../../components/ToDoForm';

export default function ToDoPage (props) {

  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if(!props.user) {
     return navigate('/')
    }
     getTasks(props.user._id)
     .then(result =>{
      setTodos(result)
     })
.catch(err=> {
  console.error(err.message)
} )
  }, [])
  

  const getNewTd = (data) => {
    createTask({
      authorId : props.user._id,
      ...data,
      status :'new'
    })
    .then((createdTask) =>{
      const newTodo = [...todos, createdTask];
      setTodos(newTodo);

    })
    .catch(err =>{
      console.error(err)
    })
  }


  return (
    <div>
      <h1>To Do List</h1>
      <ToDoForm sendData={getNewTd}/>
      <ToDoList todos={todos}/>
    </div>
  )
}
