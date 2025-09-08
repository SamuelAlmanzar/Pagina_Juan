import Home from './Pages/Home/page'
import './App.css'
import Registro from './Pages/Formulario/page'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
    </div>
      
  )
}

export default App
