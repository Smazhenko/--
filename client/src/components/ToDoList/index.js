import React from 'react'
import ToDoItem from '../ToDoItem'

export default function ToDoList(props) {
  return (
    <ul>
        {props.todos.map(td=> <ToDoItem item={td} key={td._id} />)}
    </ul>
  )
}
