import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Addblog from './components/Addblog'
import Show from './components/Show'
import Edit from './components/Edit'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Addblog/>}/>
        <Route path='/show/:id' element={<Show/>}/>
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
