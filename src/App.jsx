import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Articles from './pages/articles/Articles'
import SignIn from './pages/signin/Signin'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
