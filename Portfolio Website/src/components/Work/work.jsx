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
        const grid_view = Ref.current.querySelector(".grid-view")
        const row_view = Ref.current.querySelector(".row-view")
        const heading = Ref.current.querySelector("h2")
        Magnetic(grid_view)
        Magnetic(row_view)
        Magnetic(heading)
    }, []);

    //showing the live projects on hover
    useEffect(() => {
        const projects = Ref.current.querySelectorAll("tr")
        const box = Ref.current.querySelector(".project-img")
        const btn = Ref.current.querySelector(".view-project")
        for(let i = 1; i < projects.length; i++){
            projects[i].addEventListener("mouseover", (e) => {
                btn.style.transform = 'scale(100%)'
                box.style.transform = "scale(100%)"
                box.style.left = e.clientX -125 + "px"
                box.style.top = e.clientY -125  + "px"
                btn.style.left = e.clientX  + "px"
                btn.style.top = e.clientY  + "px"
                
            })
            projects[i].addEventListener("mouseout", (e) => {
                box.style.transform = "scale(0)"
                btn.style.transform = "scale(0)"
            })
        }
    }, []);

     //scrolling the projects on mousemove
     useEffect(() => {
        const projects = Ref.current.querySelectorAll("tr");
        const box = Ref.current.querySelector(".project-img");
        const live_project = Ref.current.querySelectorAll(".live-projects");
        const scrolls = [["Weather Forecast",0],["Todo App",300],["Story Book",600],["Calculator",900], ["Currency Convertor", 1200], ["Digital Clock", 1500]]
        const colors = ["#383737", "#d5eded", "#405959", "#d7dbdb", "#d5eded", "#405959"]
        projects.forEach((project) => {
           
            project.addEventListener("mouseover", (e) =>{
                
                const item = e.target.firstElementChild.innerText;
        
                 for(let i = 0; i < 6; i++){  
                    live_project[i].style.borderColor = colors[i]          
                    if(item == scrolls[i][0]){                      
                        box.scrollTo({
                            top:scrolls[i][1],
                            behavior:"smooth"
                        })
                    }
            }
                
            })
        
        })
    },[]);

    //animating the page 
    useEffect(() => {
        const element = Ref.current.querySelector(".Work-Page")
        document.body.addEventListener("wheel", (e) => {
           
            if( e.deltaY < 0){
                element.classList.remove("animate")
            }
            if( e.deltaY > 0){
                element.classList.add("animate")
            }
        })
    }, []);
    //handling the row and grid view buttons
    function handleWorkView(e){
        const row = Ref.current.querySelector(".work-table")
        const grid = Ref.current.querySelector(".project-small-screen")
        const row_view = Ref.current.querySelector(".row-view")
        const grid_view = Ref.current.querySelector(".grid-view")
        
        if ( e.target == row_view){
            row.style.display = "inherit"
            grid.style.display = "none"
            
        }
        else if( e.target == grid_view){
            row.style.display = "none"
            grid.classList.add("gridclick")
        }
    };

    return(
        
        <div className="Work-Page-Container" ref = {Ref}>  
            <Nav color = "black" />
            <div className="Work-Page">
                <h1 className="heading">
                    Creating next level digital products
                </h1>
                <div className = "display-row">
                    <h2>PRODUCTS  ⇲</h2>
                    <button onClick={ (e) => handleWorkView(e)} className="row-view fa-solid fa-diagram-predecessor"></button>
                    <button onClick={ (e) => handleWorkView(e)} className="grid-view fa-solid fa-table-cells-large"></button>
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
                <a href="https://www.google.com" className = "view-project">View</a>
                <div className="project-img">
                
                <img src = "weather.png" className="live-projects"></img>
                <img src = "todo.png" className="live-projects"></img>
                <img src = "storybook.png" className="live-projects"></img>
                <img src = "calculator.png" className="live-projects"></img>
                <img src = "currency.png" className="live-projects"></img>
                <img src = "clock.png" className="live-projects"></img>
                <img src = "weather.png" className="live-projects"></img>
            </div>
            <div className = "project-small-screen">
                <div>
                    <img src = "weather.png"></img>
                    <h2>Weather Forecast</h2>
                    <hr></hr>
                </div>
               
                <div>
                    <img src = "todo.png"></img>
                    <h2>Todo App</h2>
                    <hr></hr>
                </div>
               
                <div>
                    <img src = "storybook.png"></img>
                    <h2>Story Book</h2>
                    <hr></hr>
                </div>
               
                <div>
                    <img src = "calculator.png"></img>
                    <h2>Calculator</h2>
                    <hr></hr>
                </div>
           
                <div>
                    <img src = "currency.png"></img>
                    <h2>Currency Converter</h2>
                    <hr></hr>
                </div>
                <div>
                    <img src = "clock.png"></img>
                    <h2>Digital Clock</h2>
                    <hr></hr>
                </div>
        

            </div>
            </div>
            <Contact />
            <Footer />
        </div>
        
    )
}
export default Work;