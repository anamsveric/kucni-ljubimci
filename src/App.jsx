import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Oskar from './pages/Oskar'
import Oryx from './pages/Oryx'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-stranici" element={<About />} />
        <Route path="/oskar" element={<Oskar />} />
        <Route path="/oryx" element={<Oryx />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/politika-privatnosti" element={<Privacy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
