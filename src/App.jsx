import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Form/Login'
import Signup from './components/Form/Signup'
import User from './components/User/User'
import Hotels from './components/Hotels/Hotels'
import Navbar from './components/Navbar/Navbar'

function App() {
  const user = JSON.parse(localStorage.getItem("user"))
  const isLogin = localStorage.getItem("IsLogin")
  return (
    <>
      {isLogin && <Navbar user={user} />}
      <Routes>
        <Route path='/user' element={!isLogin ? <Navigate to="/" /> : <User />} />
        <Route path='/' element={isLogin ? <Navigate to="/user" /> : <Login />} />
        <Route path='/signup' element={isLogin ? <Navigate to="/user" /> : <Signup />} />
        <Route path='/user/hotels' element={!isLogin ? <Navigate to="/" /> : <Hotels />} />
      </Routes>
    </>
  )
}

export default App
