import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Tours from './pages/Tours'
import About from './pages/About'
import Contact from './pages/Contact'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours"        element={<Tours />} />
          <Route path="/about"        element={<About />} />
          <Route path="/contact"      element={<Contact />} />
          {/* Fallback → Home */}
          <Route path="*"             element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
