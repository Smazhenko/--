import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import ToDoList from '../../components/ToDoList';
import {getTasks, createTask} from '../../api/taskApi';
import ToDoForm from '../../components/ToDoForm';
import { checkToken } from '../../api/userApi'

export default function ToDoPage (props) {

  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if(!props.user) {
      let token = localStorage.getItem('token');
      if(token) {
       checkToken(token)
       .then(userData=>{
        props.sendUser(userData.data);
       })
       .catch(err=>{
        return navigate('/')
       })
      } else {
        return navigate('/')
      }
    } else {
      getTasks(props.user._id)
      .then(result =>{
       setTodos(result)
      })
 .catch(err=> {
   console.error(err.message)
 } )
    }
  }, [props.user])
  

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
