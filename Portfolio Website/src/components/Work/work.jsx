import React, { useEffect, useRef } from "react";
import Nav from "../Navbar/nav"
import Footer from "../Footer/footer"
import Contact from "../Contact/contact"
import Magnetic from "../../Animations/magnetic"
import transition from "../../Animations/transition"
import { motion } from "framer-motion"
import "./work.css"
function Work(){
    const Ref = useRef(null)

    //changing the document title with page routing
    useEffect(() => {
        document.title = "Work - Sambhu Sankar Swain"
        }, []);
     
    //magnetic effect to buttons
    useEffect(() => {
        const elements = Ref.current.querySelectorAll("button")
        Magnetic(elements[0])
    }, [])
    //showing the live projects on hover
    useEffect(() => {
        const projects = Ref.current.querySelectorAll("tr")
        const box = Ref.current.querySelector(".project-img")
        for(let i = 1; i < projects.length; i++){
            projects[i].addEventListener("mouseover", (e) => {
                
                box.style.transform = "scale(100%)"
                box.style.left = e.clientX -125 + "px"
                box.style.top = e.clientY -125  + "px"
            })
            projects[i].addEventListener("mouseout", (e) => {
                box.style.transform = "scale(0)"
            })
        }
    }, []);
    return(
        
        <div className="Work-Page-Container" ref = {Ref}>  
            <Nav color = "black" />
            <div className="Work-Page">
                <h1 className="heading">
                    Creating next level digital products
                </h1>
                <div className = "display-row">
                    <h2>PRODUCTS  ⇲</h2>
                    <button><i class="fa-solid fa-diagram-predecessor"></i></button>
                    <button><i class="fa-solid fa-table-cells-large"></i></button>
                </div>
                <table className="work-table">
                    <tr>
                        <th>project</th>
                        <th>services</th>
                        <th>year</th>
                    </tr>
                    <tr>
                        <td>Weather Forecast</td>
                        <td>Design & Development</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>Todo App</td>
                        <td>Design & Development</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>Story Book</td>
                        <td>Design & Development</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>Calculator</td>
                        <td>Development</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>Currency Convertor</td>
                        <td>Design & Development</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>Digital Clock</td>
                        <td>Development</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>Weather Forecast</td>
                        <td>Design & Development</td>
                        <td>2024</td>
                    </tr>
                </table>
                <div className="project-img">
                <a href="https://www.google.com" className = "view-project">View</a>
                <img src = "portfolio.png" className="live-projects"></img>
                <img src = "todo.png" className="live-projects"></img>
                <img src = "triplespdf.png" className="live-projects"></img>
                <img src = "tictactoe.png" className="live-projects"></img>
                 
            </div>
            <div className = "project-small-screen">
            <a href="https://www.google.com" className = "view-project">View</a>
                <div>
                    <img src = "portfolio.png"></img>
                    <h2>Old Portfolio Website</h2>
                </div>
                <hr></hr>
                <div>
                    <img src = "todo.png"></img>
                    <h2>Todo App</h2>
                </div>
                <hr></hr>
            </div>
            </div>
            <Contact />
            <Footer />
        </div>
        
    )
}
export default Work;