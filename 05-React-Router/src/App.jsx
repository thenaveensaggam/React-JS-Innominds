
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/NavBar';
import Users from './pages/Users';
import User from './components/User';


function App() {
  
  
  return (
    <>
     <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:userId' element={<User/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
