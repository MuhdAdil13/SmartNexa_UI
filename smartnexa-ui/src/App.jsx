import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/RegistrationForm'
import Dashboard from './pages/seller/dashboard/Dashboard';
import AddProducts from './pages/seller/AddProducts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main site routes */}
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        
        {/* Seller Dashboard routes */}
        <Route path="/seller/*" element={<Dashboard />}/>
      </Routes>
  </Router>
  )
}

export default App