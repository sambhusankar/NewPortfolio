import React, { useState, useRef, useEffect, Suspense } from "react"
const Nav = React.lazy(() => import("../Navbar/nav"))
const Footer = React.lazy(() => import("../Footer/footer")) 
import Magnetic from "../../Animations/magnetic"
import "../../Animations/hover-effect.css"
import "./contact.css"
import emailjs from "emailjs-com"
import { motion } from 'framer-motion'
function Contact(){
    emailjs.init("sikmVpFZ_w8znQeGb")
    const Ref = useRef(null)
    const form = useRef(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [service, setService] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        emailjs.sendForm("service_own55l5", "template_vev2522", form.current , "sikmVpFZ_w8znQeGb").then(
            (result) => {
                console.log(result)
            }
    )
        setName('');
        setEmail('');
        setCompany('');
        setService('');
        setMessage('');
}

    //setting the page title dynamically
    useEffect(() => {
        document.title = "Contact - Sambhu Sankar Swain"
    }, []);
    
    // setting the magnetic effect to links
    useEffect(() => {
        const btn = Ref.current.querySelector(".send-it-btn")
        const elements = Ref.current.querySelectorAll("a")
        elements.forEach((element) => Magnetic(element))
        Magnetic(btn)
    }, []);
    
    return(
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} 
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="Contact-page-container" ref = { Ref }>
            <Suspense fallback = {<p>navbar is loading...</p>}><Nav color = "white" /></Suspense>
            <div className="Contact-page">
                <div className="left-side">
                    <h1 className="heading">Let's start a project together</h1>
                    <form className="user-details" ref = { form }>
                        <div className="form-row">
                            <h5>01</h5>
                            <label>What's your name ?</label>
                            <input type = "text" placeholder="John Doe *" value = {name} onChange = {(e) => setName(e.target.value)} name = "user_name" required></input>
                        </div>
                        <div className="form-row">
                            <h5>02</h5>
                            <label>What's your email ?</label>
                            <input type = "email" placeholder="john@doe.com *" value = {email} onChange = {(e) => setEmail(e.target.value)} name = "user_email" required></input>
                        </div>
                        <div className="form-row">
                            <h5>03</h5>
                            <label>What's the name of your organizaion ?</label>
                            <input type = "text" placeholder="John & Doe®" value = {company} onChange = {(e) => setCompany(e.target.value)} name = "user_org" required></input>
                        </div>
                        <div className="form-row">
                            <h5>04</h5>
                            <label>What service are you looking for ?</label>
                            <input type = "text" placeholder="Web Development..." value = {service} onChange = {(e) => setService(e.target.value)} name = "user_service" required></input>
                        </div>
                        <div className="form-row">
                            <h5>05</h5>
                            <label>Your message</label>
                            <input type = "text" placeholder="Hello Sankar can you help me with...*" value = {message} onChange = {(e) => setMessage(e.target.value)} name = "user_message" required></input>
                        </div>
                    </form>
                    <div className="line-btn">
                        <hr></hr>
                        <div className="send-it-btn hover-effect" onClick = {handleSubmit}><span>Send it !</span></div>
                    </div>
                </div>
                <div className="right-side">
                    <h1 className = "small-screen-heading"> <img src = "icon.png"></img> Let's start a project together</h1>
                    <img src = "icon.png" className="icon"></img>
                    <i className="arrow fa-solid fa-arrow-right"></i>
                    <ul className = "contact-details">
                        <li><h5>CONTACT DETAILS</h5></li>
                        <li><a href = "mailto:sambhusankarswain@gmail.com">sambhusankarswain@gmail.com</a></li>
                        <li><a href = "tel:8238187630">+91 8238187630</a></li>
                        <li>chennai, india</li>
                    </ul>
                    
                    
                    <ul className="socials-container">
                        <li><h5>SOCIALS</h5></li>
                        <li><a href = "https://in.linkedin.com/in/s-sankar-swain-b9821a270">Linkedin</a></li>
                        <li><a href = "https://twitter.com/sankar_sw">Twitter</a></li>
                        <li><a href = "https://github.com/sambhusankar">Github</a></li>
                        <li><a href = "https://wa.link/igftyr">Whatsapp</a></li>
                    </ul>
                                
                </div>         
            </div>
            <Suspense><Footer /></Suspense>
        </motion.div>
    )
}
export default Contact