/* eslint-disable no-unused-vars */
import CreteTodo from './components/CreateTodo'
import './App.css'
import Todos from './components/Todos'
import { useEffect, useState } from 'react'


function App() {
  const [todos, setTodos] = useState([]);

  async function getTodos(){
    const todos = await fetch(`${import.meta.env.VITE_APP_GET_TODOS}`) // problem with process - in vite project
      const json = await todos.json()
      setTodos(json.todos)
      console.log(todos);
  }

  useEffect( () => {
      getTodos()
  }, [])

  function handleTodoAdded(){
    getTodos()
  }
  
  async function handleMarkAsCompleted(id) {
    const response = await fetch(`${import.meta.env.VITE_APP_COMPLETE_TODO}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });

    if (response.ok) {
      getTodos(); // Refresh the todos after updating
    }
  }

  return (
    <>
     <CreteTodo onTodoAdded={handleTodoAdded} />
     <Todos todos={todos} onMarkAsCompleted={handleMarkAsCompleted}/>
    </>
  )
}

export default App
