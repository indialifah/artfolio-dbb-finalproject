import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import MyProfile from './pages/MyProfile';


function App() {
  

  return (
    <Router>
      <Routes>
        {/* <h1 className='text-8xl font-bold'>Setup done yeay!</h1>  */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />}/>
        <Route path='/userprofile' element={<UserProfile/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
      </Routes>
    </Router>
  )
}

export default App
