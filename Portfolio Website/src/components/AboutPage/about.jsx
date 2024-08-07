import React, { useEffect, useRef, useState} from "react"
import  './about.css'
import Nav from "../Navbar/nav"
import Contact from "../Contact/contact"
import Footer from "../Footer/footer"
import { motion } from 'framer-motion'
function About(){
    const Ref = useRef(null);

    //changig the page title dynamically
    useEffect(() => {
        document.title = "About - Sambhu Sankar Swain"
    }, [])

     //animating the page on scroll
     useEffect(() => {
        const element = Ref.current.querySelector(".About-page")
        const arrow = Ref.current.querySelector(".fa-arrow-right")
        window.addEventListener("scroll", (e) => {
            if(element.getBoundingClientRect().bottom < window.innerHeight - 40 && element.getBoundingClientRect().bottom > 10){
                element.classList.remove("animate")
            }
            if(arrow.getBoundingClientRect().top < 50){
                arrow.style.transform = "rotate(35deg)"
                console.log(arroww.getBoundingClientRect().top)
            }
            else{
                element.classList.add("animate")
                arrow.style.transform = "rotate(0deg)"
            }
        })
        
    }, []);



    return(
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} 
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="About-page-container" ref = { Ref }>
            <Nav color = "black" />
            <div className = "About-page">
                <h1 className = "heading">Helping brands thrive in the digital world</h1>
                <div className = "line-global">
                    <hr></hr>
                    <div className = "global"><i className="fas fa-globe fa-bounce"></i></div>
                </div>
                <div className = "txt-photo">
                    <i className = "arrow fa-solid fa-arrow-right"></i>
                    <div className = "txts">
                        <p>I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.</p>
                        <p>Always exploring<Loading /></p>
                    </div>
                    <img src = "fullphoto.jpg"></img>
                </div>
                <div className = "helping-section">
                    <h2>I can help you with<Loading /></h2>
                    <div>
                        <span>01</span>
                        <hr></hr>
                        <h3>Frontend</h3>
                        <p>With a solid track record in frontend development, I deliver robust and intuitive user experiences. (Since 2024 only in combination with backend integration)</p>
                    </div>
                    <div>
                        <span>02</span>
                        <hr></hr>
                        <h3>Backend</h3>
                        <p>I develop scalable backend systems that integrate seamlessly with frontend frameworks. My focus is on performance, security, and scalability. Built with Node.js or Django.</p>
                    </div>
                    <div>
                        <span>03</span>
                        <hr></hr>
                        <h3>●The full package</h3>
                    <p>I deliver complete backend solutions that set me apart. My expertise in server-side development and seamless integration with frontend technologies allow me to create exceptional projects.</p>
                    </div>
                    <div>
                        <span>04</span>
                        <hr></hr>
                        <h3>Python</h3>
                        <p>I deliver complete Python development solutions that set me apart. My expertise in Python's versatility and seamless integration with various frameworks allow me to create exceptional projects.</p>
                    </div>
                    <div>
                        <span>05</span>
                        <hr></hr>
                        <h3>IoT</h3>
                        <p>Delivering end-to-end IoT solutions that stand out, I excel in integrating MTConnect, PLC programming, and TCP/IP communication for seamless, innovative projects</p>
                    </div>
                    <div>
                        <span>06</span>
                        <hr></hr>
                        <h3>MS Office</h3>
                        <p>Proficient in MS Office, I excel at utilizing Excel, Word, and PowerPoint to create detailed reports, effective documents, and engaging presentations, ensuring professional and polished results.</p>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </ motion.div>
    )
}
export default About


function Loading(){
    return(
        <span className = "loading-anime">
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </span>
    )
}