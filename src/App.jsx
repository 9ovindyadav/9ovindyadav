import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { Projects } from './Pages/Projects'
import { Blogs } from './Pages/Blogs'
import { Contact } from './Pages/Contact'
import { NotFound } from './Pages/NotFound'

function App() {

  return (
   <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/blogs' element={<Blogs />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
   </BrowserRouter>
  )
}

export default App
