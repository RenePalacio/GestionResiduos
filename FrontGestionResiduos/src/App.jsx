import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CentrosAcopio from './pages/CentrosAcopio';
import CentroAcopioDetalle from './pages/CentroAcopioDetalle';
import ComoReciclar from './pages/ComoReciclar';
import AdminPanel from './pages/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';
import Error404 from './components/Error404';
import Error500 from './components/Error500';
import TiposPlasticos from './pages/TiposPlasticos'
import Las3R from './pages/Las3R'
import Legislacion from './pages/Legislacion'
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    // Verificar si hay un token en localStorage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);


  return (
    <Router>
       <ScrollToTop />
      <div className="app">
        <Navbar isAuthenticated={isAuthenticated} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/centros-acopio" element={<CentrosAcopio />} />
            <Route path="/centros-acopio/:id" element={<CentroAcopioDetalle />} />
            <Route path="/como-reciclar" element={<ComoReciclar />} />
            <Route path="/tipos-plasticos" element={<TiposPlasticos />} />
            <Route path="/las-3r" element={<Las3R />} />
            <Route path="/legislacion" element={<Legislacion />} />
            
            {/* Ruta protegida para administración */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } />

            {/* Rutas de error */}
            <Route path="/error-500" element={<Error500 />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 