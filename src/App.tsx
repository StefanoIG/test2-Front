import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Navbar from './components/navbar';
import ProfilePage from './pages/ProfilePage';
import LandingPage from './pages'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Ruta para el registro */}
          <Route path="/register" element={<Register />} />

          {/* Ruta para el login */}
          <Route path="/login" element={<Login />} />

          {/* Ruta por defecto (home) */}
          <Route path="/" element={<LandingPage/>} />
  
          {/* Ruta para el perfil */}
          <Route path="/profile" element={<ProfilePage />} />
          
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
