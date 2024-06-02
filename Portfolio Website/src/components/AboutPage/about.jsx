import React, { useEffect, useRef } from "react"
import  './about.css'
import Nav from "../Navbar/nav"
import Contact from "../Contact/contact"
import Footer from "../Footer/footer"
function About(){
    const Ref = useRef(null);
    //changig the page title dynamically
    useEffect(() => {
        document.title = "About - Sambhu Sankar Swain"
    }, [])
     //animating the page on scroll
     useEffect(() => {
        const page = Ref.current.querySelector(".About-page")
        const arrow = Ref.current.querySelector(".fa-arrow-right")
        document.body.addEventListener("wheel", (e) => {
            if(e.deltaY < 0){
                page.classList.remove("animate")  
                arrow.style.transform = "rotate(45deg)"     
            }
            if(e.deltaY > 0){
                page.classList.add("animate")
                arrow.style.transform = "rotate(0deg)"
            }
        })
        document.addEventListener("keydown", (e) => {
            if(e.key == "ArrowUp"){
                page.classList.remove("animate")
                arrow.style.transform = "rotate(45deg)"
            }
            if(e.key == "ArrowDown"){
                page.classList.add("animate")
                arrow.style.transform = "rotate(0deg)"
            }
        })
    }, []);

    return(
        <div className="About-page-container" ref = { Ref }>
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
                        <p>Always exploring...</p>
                    </div>
                    <img src = "fullphoto.jpg"></img>
                </div>
                <div className = "helping-section">
                    <h2>I can help you with</h2>
                    <div>
                        <span>01</span>
                        <hr></hr>
                        <h3>Frontend</h3>
                        <p>With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)</p>
                    </div>
                    <div>
                        <span>02</span>
                        <hr></hr>
                        <h3>Backend</h3>
                        <p>I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. Build with Kirby CMS or Webflow.</p>
                    </div>
                    <div>
                        <span>03</span>
                        <hr></hr>
                        <h3>●The full package</h3>
                    <p>A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.</p>
                    </div>
                    <div>
                        <span>04</span>
                        <hr></hr>
                        <h3>Python</h3>
                        <p>A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.</p>
                    </div>
                    <div>
                        <span>05</span>
                        <hr></hr>
                        <h3>IoT</h3>
                        <p>A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.</p>
                    </div>
                    <div>
                        <span>06</span>
                        <hr></hr>
                        <h3>MS Office</h3>
                        <p>A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.</p>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}
export default About