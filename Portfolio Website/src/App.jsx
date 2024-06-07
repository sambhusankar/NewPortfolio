import React, { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation} from "react-router-dom"
import Work from './components/Work/work'
import Home from './components/Home/home'
import About from './components/AboutPage/about'
import Contact from './components/ContactPage/contact'
import '@fortawesome/fontawesome-free/css/all.css';



function App() {
  const location = useLocation()
 const [a, A] = useState()
 useEffect(() => {
    document.body.style.overflow = "hidden"
  }, []);

    document.addEventListener("keydown", (e) => {

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
     <Routes location={location} key = {location.pathname}>
      <Route path = "/" element = { <Home /> }></Route>
      <Route path = "/work" element = { <Work /> }></Route>
      <Route path = "/about" element = { <About /> }></Route>
      <Route path = "/contact" element = { <Contact /> }></Route>
     </Routes>
     
    </div>
  )
}

export default App