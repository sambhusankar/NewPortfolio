import React, { useEffect } from 'react'

import Home from './components/Home/home'
import './App.css'

function App() {
  useEffect(() => {
    document.addEventListener("wheel", (e)=>{
    window.scrollTo(0, e.deltaY)
    });
  }, [])
 

  return (
    <div>
     <Home />
    </div>
  )
}

export default App
