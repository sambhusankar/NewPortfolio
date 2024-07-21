import React, { useEffect, useRef, useState, Suspense } from "react";
const Nav = React.lazy(() => import("../Navbar/nav"))
const Footer = React.lazy(() => import("../Footer/footer"))
const Contact = React.lazy(() => import("../Contact/contact")) 
import Magnetic from "../../Animations/magnetic"
import "../../Animations/hover-effect.css"
import "./work.css"
import { motion } from 'framer-motion'
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

    //showing the live projects on hover and expanding the row slightly
    useEffect(() => {
        const projects = Array.from(Ref.current.querySelectorAll("tr")).slice(1)
        const box = Ref.current.querySelector(".project-img")
        const btn = Ref.current.querySelector(".view-project")
        const grid_view = Ref.current.querySelectorAll(".grid-item") 
        projects.forEach((project) => {
            project.addEventListener("mouseover", (e) => {
                btn.style.transform = "scale(100%)"
                box.style.transform = "scale(100%)"
            })
            project.addEventListener("mousemove", (e) => {
                const x = e.clientX - 125
                const y = e.clientY - 125
                box.style.left  = `${x}px`
                box.style.top = `${y}px`
                btn.style.left = e.clientX - 40 + "px" 
                btn.style.top = e.clientY - 40 + "px"
                project.style.padding = "0 8%"
            })
            project.addEventListener("mouseout", (e) => {
                box.style.transform = "scale(0)"
                btn.style.transform = "scale(0)"
                project.style.padding = "0 10%"
            })
        })
    

        //making this in grid and flex view
        for(let i = 0; i < grid_view.length; i++){
            grid_view[i].addEventListener("mousemove", (e) => {
                btn.style.transform = 'scale(100%)'
                btn.style.left = e.clientX - 40 + "px"
                btn.style.top = e.clientY - 40 + "px"
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
        window.addEventListener("scroll", (e) => {
            if(element.getBoundingClientRect().bottom < window.innerHeight - 40 && element.getBoundingClientRect().bottom > 10){
                element.classList.remove("animate")
            }
            else{
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
        if(window.innerWidth > 1000){
            if(rowView == true){
                SetgridView(false)
                row_view.style.setProperty("--bg", "black")
                row_view.style.setProperty("--top", "0")
                row_view.style.color = "white"
                grid_view.style.setProperty("--top", " 80px")
                grid_view.style.setProperty("--bg", "rgb(7, 90, 245)")
                grid_view.style.color = "black"
                grid.style.display = "none"
                row.style.display = "inherit"
            }
            if(gridView == true){
                SetrowView(false)
                grid_view.style.setProperty("--top", "0")
                grid_view.style.color = "white"
                grid_view.style.setProperty("--bg", "black")
                row_view.style.setProperty("--bg", "rgb(7, 90, 245)")
                row_view.style.setProperty("--top", "80px")
                row_view.style.color = "black"
                row.style.display = "none"
                grid.style.display = "grid"

            }
         }
    }, [rowView, gridView]);

    // changing the view on page resize
    useEffect(() => {
        const row = Ref.current.querySelector(".work-table")
        const grid = Ref.current.querySelector(".project-small-screen")
        window.addEventListener("resize", (e) => {
            if(document.body.clientWidth < 1000){
                grid.style.display = "grid"
                row.style.display = "none"
            }
            if(document.body.clientWidth < 700){
                grid.style.display = "flex"
                row.style.display = "none"
            }
            if(document.body.clientWidth > 1000){
                grid.style.display = "none"
                row.style.display = "inherit"
            }
        })

    },[document.body.clientWidth]);

    
    

    return(
         
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} 
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="Work-Page-Container" ref = {Ref}>  
            <Suspense><Nav color = "black" /></Suspense>
            <div className="Work-Page">
                <h1 className="heading">Creating next level digital products</h1>
                <div className = "display-row">
                    <h2>PRODUCTS  ⇲</h2>
                    <button onClick={ (e) => handleWorkView(e)} className="row-view"><span className = "fa-solid fa-diagram-predecessor z-3"></span></button>
                    <button onClick={ (e) => handleWorkView(e)} className="grid-view"><span className = "fa-solid fa-table-cells-large z-3"></span></button>
                </div>
                <table className="work-table">
                    <thead>
                    <tr>
                        <th>project</th>
                        <th>services</th>
                        <th>year</th>
                    </tr>
                    </thead>
                    <tbody>
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
                    </tbody>

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
            <Suspense><Contact /></Suspense>
            <Suspense><Footer /></Suspense>
        </motion.div>
        
    )
}
export default Work;