import React, { useEffect } from 'react'
import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation} from "react-router-dom"
import Work from './components/Work/work'
import Home from './components/Home/home'
import About from './components/AboutPage/about'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css';



function App() {
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = "hidden"
  }, []);

    document.addEventListener("keydown", (e) => {
      e.preventDefault()
      if(e.key == "ArrowDown"){
        window.scrollBy({
          top:250,
          behavior:"smooth"
        })
      }
      if(e.key == "ArrowUp"){
        window.scrollBy({
          top:-250,
          behavior:"smooth"
        })
      }
    })
    document.addEventListener("wheel", (e) => {
      if(e.deltaY < 0){
        window.scrollBy({
          top:-250,
          behavior:"smooth"
        })
      }
      else{
        window.scrollBy({
          top:250,
          behavior:"smooth"
        })
      }
    })

  return(
     <div>
      
      <AnimatePresence mode = "wait">
     <Routes location={location} key = {location.pathname}>
      <Route path = "/" element = { <Home /> }></Route>
      <Route path = "/work" element = { <Work /> }></Route>
      <Route path = "/about" element = { <About /> }></Route>
     </Routes>
     </AnimatePresence>
     
     
    </div>
  )
}

export default App