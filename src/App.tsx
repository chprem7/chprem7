import { useState } from 'react'
import MyHomePage from './pages/Home'
import MyContactsPage from './pages/Contacts'
import MyAboutPage from './pages/Abouts'
import MyBlogPage from './pages/Blogs'
import SignupForm from './pages/Signup'
import { Route,Routes, Link } from 'react-router-dom'
import './App.css'
import './test1.css'
import './navbar.css'
import './contactform.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
 <nav className="navbar">
<ul className="nav-links">
<li><Link to="/home">Home</Link></li>
<li><Link to="/abouts">About</Link></li>
<li><Link to="/contacts">Contacts</Link></li>
<li><Link to="/blogs">Blogs</Link></li>
<li><link to ="/signup">SignUp</link></li>
</ul>
</nav>
<Routes>
<Route path='/home' element={<MyHomePage/>} />
<Route path='/abouts' element={<MyAboutPage />}/>
<Route path='/contacts' element={<MyContactsPage/>}/>
<Route path='/blogs' element={<MyBlogPage/>}/>
<Route path='/signup' element={<SignupForm/>}/>
</Routes>

    </>
  )
}

export default App
