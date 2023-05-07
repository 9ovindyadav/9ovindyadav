import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { Projects } from './Pages/Projects'
import { Blogs } from './Pages/Blogs'
import { About } from './Pages/About'

function App() {

  return (
   <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/blogs' element={<Blogs />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
        <Footer />
   </BrowserRouter>
  )
}

export default App
