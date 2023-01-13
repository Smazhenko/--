import React from 'react'
import  styles from './ToDoItem.module.css'

export default function ToDoItem(props) {

    const {item: {body,deadline, status}} = props
  return (
    <li>
        <span>{body}</span>
        {/* <span>{deadline.toISOString()}</span> */}
        <span>{status}</span>

    </li>
  )
}
