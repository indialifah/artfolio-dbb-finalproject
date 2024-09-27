import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

function App() {
  

  return (
    <Router>
      <Routes>
        {/* <h1 className='text-8xl font-bold'>Setup done yeay!</h1>  */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />}/>
        <Route path='/userprofile' element={<UserProfile/>} />
      </Routes>
    </Router>
  )
}

export default App
