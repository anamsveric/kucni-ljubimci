import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import About from './pages/About'
import Oskar from './pages/Oskar'
import Oryx from './pages/Oryx'
import Contact from './pages/Contact'
import Health from './pages/Health'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import Privacy from './pages/Privacy'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-stranici" element={<About />} />
        <Route path="/oskar" element={<Oskar />} />
        <Route path="/oryx" element={<Oryx />} />
        <Route path="/zdravlje" element={<Health />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/politika-privatnosti" element={<Privacy />} />
      </Routes>
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
