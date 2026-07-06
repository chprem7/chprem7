import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export default function App() {
  const [todos, setTodos] = useState([{id:0, Name:'', Email:''}])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.Name}{todo.Email}</li>
      ))}
    </ul>
  )
}