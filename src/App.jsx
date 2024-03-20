
import './App.css'
import Signupp from './Component/Authentication/Signup'
import Login from './Component/Authentication/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import { BlogFilter } from './Component/BlogContent/BlogFilter'
import { CreateBlog } from './Component/BlogContent/CreateBlog'
import {Layout} from './Layout/Layout'
import { Content } from './Component/BlogContent/Content'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element=<Layout/>>
      <Route index element={<Content/>}/>
        <Route path='/signup' element={<Signupp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/blogfilter' element={<BlogFilter/>}/>
        <Route path='/createblog' element={<CreateBlog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App
