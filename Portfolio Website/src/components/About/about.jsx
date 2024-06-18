import React, { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import Magnetic from "../../Animations/magnetic"
import "../../Animations/Shakable.css"
import "../../Animations/hover-effect.css"
import "./about.css"
function About(){
    const Ref = useRef(null)
    const border_colors = ["#dee0e0", "#babd9b", "#b9c7c6", "#232424", "#89aba5", "#e0d1e3", "#c2c0c2", "#e0d5c3"]
    
    // border for images
    useEffect(() => {
        const imgs = Ref.current.querySelectorAll(".auto-scroll-imgs")
        for(const [i, img] of imgs.entries()){
            img.style.border = ` 25px solid ${border_colors[i] }`
            img.style.borderTopWidth ="35px" ;
            img.style.borderBottomWidth = "35px";
         
        }
    }, []);

    //magnetic effect to aboutme button
    useEffect(() => {
        const element = Ref.current.querySelector(".aboutme-bubble")
        Magnetic(element)
        
    }, []);

    //left and right srolling of works and animating
    useEffect(() => {
        const left_scroll = Ref.current.querySelector(".left-scroll")
        const right_scroll = Ref.current.querySelector(".right-scroll")
        const pos = left_scroll.getBoundingClientRect()
        
        document.body.addEventListener("wheel", (e) => {
            if(e.deltaY < 0 && pos.top >= 0 ){
                Ref.current.classList.remove("animate")
                left_scroll.style.right = "22vw"
                right_scroll.style.right = "15vw"
            }
            if(e.deltaY > 0 && pos.top >= 0 ){
                Ref.current.classList.add("animate")
                left_scroll.style.right = "18vw"
                right_scroll.style.right = "19vw"
            }
        })
        document.addEventListener("keydown", (e) => {
            if(e.key == "ArrowUp" && pos.top >= 0 ){
                Ref.current.classList.remove("animate")
                left_scroll.style.right = "22vw"
                right_scroll.style.right = "15vw"
            }
            if(e.key == "ArrowDown" && pos.top >= 0 ){
                Ref.current.classList.add("animate")
                left_scroll.style.right = "18vw"
                right_scroll.style.right = "19vw"
            }
        })
    }, []);

    //showing the image of project on mouse hover and moving with cursor
    useEffect(() => {
        const projects = Ref.current.querySelectorAll("li")
        const box = Ref.current.querySelector(".project-img")
        const btn = Ref.current.querySelector(".view-project")
        
        projects.forEach((project) => {
            
            project.addEventListener("mouseover", (e) => {
                btn.style.transform = "scale(100%)"
                box.style.transform = "scale(100%)"
                const x = e.clientX - 125
                const y = e.clientY - 125
            
                box.style.left  = `${x}px`
                box.style.top = `${y}px`
                btn.style.left = e.clientX - 20 + "px"
                btn.style.top = e.clientY - 20 + "px"
            });
            project.addEventListener("mouseout", (e) => {
                box.style.transform = "scale(0%)"
                btn.style.transform = "scale(0%)"
            })
           
        })

    }, []);

    //scrolling the projects on mousemove
    useEffect(() => {
        const projects = Ref.current.querySelectorAll("li");
        const box = Ref.current.querySelector(".project-img");
        const live_project = Ref.current.querySelectorAll(".live-projects");
        const scrolls = [["Old Portfolio",0],["Todo App",300],["PDF Merger",600],["Tic-Tac-Toe",900]]
        const colors = ["#383737", "#d5eded", "#405959", "#d7dbdb" ]
        projects.forEach((project) => {
           
            project.addEventListener("mouseover", (e) =>{
                const item = e.target.firstElementChild.innerText;

                 for(let i = 0; i < 4; i++){  
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

    //in small screens showing a button to view project
    useEffect(() => {
        const box = Ref.current.querySelector(".project-small-screen");
        const btn = Ref.current.querySelector(".view-project");
        box.addEventListener("mouseover", (e) => {
            btn.style.transform = "scale(100%)"
            btn.style.top = e.clientY + "px"
            btn.style.left = e.clientX + "px"
        })
        box.addEventListener("mouseout", () => {
            btn.style.transform = "scale(0%)"
        })
    }, []);

    return(
        <div className = "about-page" ref = {Ref}>
            <div className="about-top-section">
                <p>Helping brands to standout in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.</p>
                <p>The combination of my passion for design, code & interaction positions me in a unique place in the web development world.</p>
                <h5>RECENT WORK</h5>
                <Link className = "aboutme-bubble hover-effect" to = "/about"><span>About me</span></Link>
            
            </div>
            <ul className="works">
                <hr></hr>
                <li>
                    <h1>Old Portfolio</h1>
                    <span> Development </span>
                </li>
                <hr></hr>
                <li>
                    <h1>Todo App</h1>
                    <span> Design & Development </span>
                </li>
                <hr></hr>
                <li>
                    <h1>PDF Merger</h1>
                    <span> Design & Development </span>
                </li>
                <hr></hr>
                <li>
                    <h1>Tic-Tac-Toe</h1>
                    <span> Design & Development </span>
                </li>
                <hr />
            </ul>
            <a className = "view-project" href = "https://github.com/sambhusankar">View</a>
            <div className="project-img">
                
                <img src = "portfolio.png" className="live-projects"></img>
                <img src = "todo.png" className="live-projects"></img>
                <img src = "triplespdf.png" className="live-projects"></img>
                <img src = "tictactoe.png" className="live-projects"></img>
                 
            </div>
            <div className = "project-small-screen">         
                <div>
                    <img src = "portfolio.png"></img>
                    <h2>Old Portfolio Website</h2>
                    <hr></hr>
                    <div className = "d-flex justify-content-between"> 
                        <span>Design & Development</span>
                        <span>2023</span>
                    </div>  
                </div>
                <div>
                    <img src = "todo.png"></img>
                    <h2>Todo App</h2>
                    <hr></hr>
                    <div className = "d-flex justify-content-between">
                        <span>Design & Development</span>
                        <span>2023</span>
                    </div>
                </div>
            </div>
            <div className="more-work">
            <Link to = "/work" className="more-work-btn shakable hover-effect-25"><span>More work</span></Link>
            <div className="left-scroll">
                <img src = "triplespdf.png" className="auto-scroll-imgs"></img>
                <video className="auto-scroll-imgs" autoPlay muted loop>
                    <source src = "tictactoe-vid.mp4" type = "video/mp4"></source>
                </video>
                <video className="auto-scroll-imgs" autoPlay muted loop>
                    <source src = "clock-vid.mp4" type = "video/mp4"></source>
                </video>
                <img src = "calculator.png" className="auto-scroll-imgs"></img>
            </div>
            <div className="right-scroll">
            <video className="auto-scroll-imgs" autoPlay muted loop>
                    <source src = "todo-vid.mp4" type = "video/mp4"></source>
                </video>
                <img src = "storybook.png" className="auto-scroll-imgs"></img>
                <video className="auto-scroll-imgs" autoPlay muted loop>
                    <source src = "portfolio-vid.mp4" type = "video/mp4"></source>
                </video>
                <img src = "userauth.png" className="auto-scroll-imgs"></img>
            </div>
            </div>
            
        </div>
    )
}
export default About