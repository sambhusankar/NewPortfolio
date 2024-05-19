import React, { useState, useRef, useEffect } from "react"
import Nav from "../Navbar/nav"
import Socials from "../Socials/socials"
import Footer from "../Footer/footer"
import Magnetic from "../../Animations/magnetic"
import "../../Animations/hover-effect.css"
import "./contact.css"
function Contact(){
    const Ref = useRef(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [service, setService] = useState('')
    const [message, setMessage] = useState('')
    function handleInput(e){
        setName(e.target.value)
    };

    //setting the page title dynamically
    useEffect(() => {
        document.title = "Contact - Sambhu Sankar Swain"
    }, []);
    // setting the magnetic effect to links
    useEffect(() => {
        const btn = Ref.current.querySelector(".send-it-btn")
        const elements = Ref.current.querySelectorAll("a")
        elements.forEach((element) => console.log(element))
        Magnetic(btn)
    }, []);
    return(
        <div className="work-page-container" ref = { Ref }>
            <Nav color = "white" />
            <div className="work-page">
                <div className="left-side">
                    <h1 className="heading">Let's start a project together</h1>
                    <form className="user-details">
                        <div className="form-row">
                            <h5>01</h5>
                            <label>What's your name ?</label>
                            <input type = "text" placeholder="John Doe *" value = {name} onChange = {handleInput}></input>
                        </div>
                        <div className="form-row">
                            <h5>02</h5>
                            <label>What's your email ?</label>
                            <input type = "email" placeholder="john@doe.com *" value = {email} onChange = {(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="form-row">
                            <h5>03</h5>
                            <label>What's the name of your organizaion ?</label>
                            <input type = "text" placeholder="John & Doe®" value = {company} onChange = {(e) => setCompany(e.target.value)}></input>
                        </div>
                        <div className="form-row">
                            <h5>04</h5>
                            <label>What service are you looking for ?</label>
                            <input type = "text" placeholder="Web Development..." value = {service} onChange = {(e) => setService(e.target.value)}></input>
                        </div>
                        <div className="form-row">
                            <h5>05</h5>
                            <label>Your message</label>
                            <input type = "text" placeholder="Hello Sankar can you help me with...*" value = {message} onChange = {(e) => setMessage(e.target.value)}></input>
                        </div>
                    </form>
                    <div className="line-btn">
                    <hr></hr>
                <div className="send-it-btn hover-effect"><span>Send it !</span></div>
                </div>
                </div>
                <div className="right-side">
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
            <Footer />
        </div>
    )
}
export default Contact