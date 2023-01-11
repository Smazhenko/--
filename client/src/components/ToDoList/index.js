import React from 'react'

export default function ToDoList(props) {
  return (
    <ul>
        {props.totod.map(td=> <li>{td}</li>)}
    </ul>
  )
}
