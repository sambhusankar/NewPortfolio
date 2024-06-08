import React, { useEffect, useRef, useState } from "react";
import Nav from "../Navbar/nav"
import Footer from "../Footer/footer"
import Contact from "../Contact/contact"
import Magnetic from "../../Animations/magnetic"
import transition from "../../Animations/transition"
import "../../Animations/hover-effect.css"
import { motion } from "framer-motion"
import "./work.css"
function Work(){
    const Ref = useRef(null)
    const [rowView, SetrowView] = useState(true)
    const [gridView, SetgridView] = useState(false)

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
        const grid_view = Ref.current.querySelectorAll(".grid-item") 
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
        for(let i = 0; i < grid_view.length; i++){
            grid_view[i].addEventListener("mouseover", (e) => {
                btn.style.transform = 'scale(100%)'
                btn.style.left = e.clientX  + "px"
                btn.style.top = e.clientY  + "px"
            })
            grid_view[i].addEventListener("mouseout", (e) => {
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

        document.body.addEventListener("keydown", (e) => {

            if(e.key == "ArrowUp"){
                element.classList.remove("animate")
            }
            if(e.key == "ArrowDown"){
                element.classList.add("animate")
            }
        })
    }, []);

    //handling the row and grid view buttons logic
    function handleWorkView(e){
        const row_view = Ref.current.querySelector(".row-view")
        const grid_view = Ref.current.querySelector(".grid-view")
        
        if ( e.target == row_view){
            SetgridView(false)
            SetrowView(true)
        }
        else if( e.target == grid_view){

            SetgridView(true)
            SetrowView(false)
        }
    };

    //showing the row and grid by logic
    useEffect(() => {
        const row = Ref.current.querySelector(".work-table")
        const grid = Ref.current.querySelector(".project-small-screen")
        const row_view = Ref.current.querySelector(".row-view")
        const grid_view = Ref.current.querySelector(".grid-view")
        
        if(rowView == true){
            SetgridView(false)
            
            if(document.body.offsetWidth < 1000 && document.body.offsetWidth >= 700){
                grid.style.display = "grid"
            }
            if(document.body.offsetWidth < 700){
                grid.style.display = "flex"
            }
            else if(document.body.offsetWidth > 1000){
                row.style.display = "inherit"
            }
            
        }
        if(gridView == true){
            SetrowView(false)
            row.style.display = "none"
            if(document.body.offsetWidth > 700){
                grid.style.display = "grid"
            }
            else if(document.body.offsetWidth < 700){
                grid.style.display = "flex"
            }
        }
    }, [rowView, gridView, document.body.clientWidth]);


    return(
        
        <div className="Work-Page-Container" ref = {Ref}>  
            <Nav color = "black" />
            <div className="Work-Page">
                <h1 className="heading">Creating next level digital products</h1>
                <div className = "display-row">
                    <h2>PRODUCTS  ⇲</h2>
                    <button onClick={ (e) => handleWorkView(e)} className="row-view hover-effect"><span className = "fa-solid fa-diagram-predecessor"></span></button>
                    <button onClick={ (e) => handleWorkView(e)} className="grid-view hover-effect"><span className = "fa-solid fa-table-cells-large"></span></button>
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
            <ul className = "project-small-screen">
                <li className = "grid-item" >
                    <img src = "weather.png"></img>
                    <h2>Weather Forecast</h2>
                    <hr></hr>
                    <div>
                        <span>Design & Development</span>
                        <span>2024</span>
                    </div>  
                </li>
               
                <li className = "grid-item" >
                    <img src = "todo.png"></img>
                    <h2>Todo App</h2>
                    <hr></hr>
                    <div>
                        <span>Design & Development</span>
                        <span>2024</span>
                    </div> 
                </li>
               
                <li className = "grid-item" >
                    <img src = "storybook.png"></img>
                    <h2>Story Book</h2>
                    <hr></hr>
                    <div>
                        <span>Development</span>
                        <span>2024</span>
                    </div> 
                </li>
               
                <li className = "grid-item" >
                    <img src = "calculator.png"></img>
                    <h2>Calculator</h2>
                    <hr></hr>
                    <div>
                        <span>Development</span>
                        <span>2023</span>
                    </div> 
                </li>
           
                <li className = "grid-item" >
                    <img src = "currency.png"></img>
                    <h2>Currency Converter</h2>
                    <hr></hr>
                    <div>
                        <span>Design & Development</span>
                        <span>2024</span>
                    </div> 
                </li>

                <li className = "grid-item" >
                    <img src = "clock.png"></img>
                    <h2>Digital Clock</h2>
                    <hr></hr>
                    <div>
                        <span>Design & Development</span>
                        <span>2023</span>
                    </div> 
                </li>
            </ul>

            </div>
            <Contact />
            <Footer />
        </div>
        
    )
}
export default Work;