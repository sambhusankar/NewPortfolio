import React, { useState, useEffect} from 'react'
import "./home.css"
import Nav from "../Navbar/nav"
import Hero from "../Hero/hero"
import About from "../About/about"
import Contact from '../Contact/contact'
import Footer from '../Footer/footer'
import { motion } from 'framer-motion'
function Home(){ 
    const hello = ["• Hello", "• नमस्ते", "• வணக்கம்", "• ନମସ୍କାର", "• ನಮಸ್ಕಾರ", "• नमस्ते"]
    const [lang, setLang] = useState('')
    const [index, setIndex] = useState(0)

    //setting the page title dynamically
    useEffect(() => {
        document.title = "Sambhu Sankar Swain"
    }, []);

  //loading page animation
    useEffect(() => {
      if (index < hello.length ){
        setTimeout(() => {
          setIndex((prev) => prev + 1);
          setLang(hello[index]);
        },200);
        
      }
    },[lang, hello, index]);
  
    
  return(
    <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} 
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="overflow-x-hidden overflow-y-hidden">
      <div className="loading-page">
      <p className="text-white h1 mx-auto my-auto"> { lang } </p>
      </div>
   
    
      <div className="home" style={{transition : "top 1s", top : lang ==hello[1] ? "0" : "100vh"}} >
       <Nav color = "white" />
       <Hero />
       <About />
       <Contact />
       <Footer />

        </div>
    </motion.div> 
  )
}

export default Home