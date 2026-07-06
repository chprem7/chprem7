import { useEffect, useState } from 'react'
import MyHomePage from './pages/Home'
import MyContactsPage from './pages/Contacts'
import MyAboutPage from './pages/Abouts'
import MyBlogPage from './pages/Blogs'
import SignupForm from './pages/Signup'
import Login from './pages/login'
import { Route,Routes, Link } from 'react-router-dom'
// import App1 from './pages/newupdate'
import './App.css'
import './test1.css'
import './navbar.css'
import './contactform.css'
import  './login.css'
import { supabase } from './utils/supabase'

function App() {
  const [todos, setTodos] = useState<Array<{ id: number; Name: string; Email: string }>>([])

  useEffect(() => {
    async function getTodos() {
      const { data } = await supabase.from('todos').select('*')

      if (data) {
        setTodos(data as Array<{ id: number; Name: string; Email: string }> )
      }
    }

    void getTodos()
  }, [])

  return (
    <>
 <nav className="navbar">
<ul className="nav-links">
<li><Link to="/home">Home</Link></li>
<li><Link to="/abouts">About</Link></li>
<li><Link to="/contacts">Contacts</Link></li>
<li><Link to="/blogs">Blogs</Link></li>
<li><Link to ="/signup">SignUp/Login</Link></li> 
</ul>
</nav>
<Routes>
<Route path='/' element={<Login />} />
<Route path='/home' element={<MyHomePage />} />
<Route path='/abouts' element={<MyAboutPage />}/>
<Route path='/contacts' element={<MyContactsPage/>}/>
<Route path='/blogs' element={<MyBlogPage/>}/>
<Route path='/signup' element={<SignupForm/>}/> 
</Routes>

<ul>
  {todos.map((todo) => (
    <li key={todo.id}>{todo.Name}{todo.Email}</li>
  ))}
</ul>
{/* <App1/>
<Login /> */}

    </>
  )
}

export default App
