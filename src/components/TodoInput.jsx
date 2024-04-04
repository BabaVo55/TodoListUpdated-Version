import React, {useState} from 'react'

export default function (props) {
    const {todoValue, setTodoValue} = props
    const {handleAddTodo} = props
  return (
    <header>
        <input value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }} placeholder='Enter Todos...' />
        <button onClick={() => {
            handleAddTodo(todoValue)
            setTodoValue('')
            }} >Add</button>
    </header>
  )
}
