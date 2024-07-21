import React, { useRef, useEffect, Suspense } from "react"
import { Link, useLocation } from 'react-router-dom'
import './sidebar.css' 
const Socials = React.lazy( () => import("../Socials/socials"))
function Sidebar({isopen}){
    const Ref = useRef(null)
    const loc = useLocation()
    const overlay = document.createElement("div")
    overlay.classList.add("overlay")
    

    //Link buttons hover effect
    useEffect(() => {
        const dots = Ref.current.querySelectorAll(".dot");
        const links = Ref.current.querySelectorAll(".Links") 
        const paths = ["/", "/about", "/work", "/contact"]

        for(let i = 0; i < links.length; i++){
            links[i].addEventListener("mouseover", () => {
                links[i].style.color = "white"
                dots[i].style.fontSize = "15px"
            })
        };
        for(let i = 0; i < links.length; i++){
            links[i].addEventListener("mouseout", () => {
                if(paths[i] != loc.pathname){
                dots[i].style.fontSize = "0";
                }
            })
        
        }
    }, []);

    // showing the dot on active pages
    useEffect(() => {
        const dots = Ref.current.querySelectorAll(".dot");
        if(loc.pathname == "/"){
            dots[0].style.fontSize = "50%"
            dots[1].style.fontSize = "0vw"
            dots[2].style.fontSize = "0vw"
            dots[3].style.fontSize = "0vw"
        }
        if(loc.pathname == "/about"){
            dots[0].style.fontSize = "0vw"
            dots[1].style.fontSize = "50%"
            dots[2].style.fontSize = "0vw"
            dots[3].style.fontSize = "0vw"
        }
        if(loc.pathname == "/work"){
            dots[0].style.fontSize = "0vw"
            dots[1].style.fontSize = "0vw"
            dots[2].style.fontSize = "50%"
            dots[3].style.fontSize = "0vw"
        }
        if(loc.pathname == "/contact"){
            dots[0].style.fontSize = "0vw"
            dots[1].style.fontSize = "0vw"
            dots[2].style.fontSize = "0vw"
            dots[3].style.fontSize = "50%"
        }
    }, [loc.pathname])

    //making light dark to the main body on sidebar open and opening sidebar
    useEffect(() => {
        if(isopen){
            if(document.body.offsetWidth <= 500){
               Ref.current.style.width = "100vw"
            }else{
        Ref.current.style.width = "500px"
      }
            Ref.current.classList.add("animate")
            Ref.current.style.right = "0vw"
            document.body.style.overflow = "hidden"
            document.body.appendChild(overlay)
        }
        else{
            Ref.current.style.width = "400px"
            Ref.current.classList.remove("animate")
            Ref.current.style.right = "-500px"
            document.body.style.overflowY = "scroll"
            const existing_overlay = document.querySelector(".overlay")
            if(existing_overlay){
                existing_overlay.remove()
            }
        }
    }, [isopen]);

    //navitgations animation while loading the sidebar
    useEffect(() => {
        const items = Ref.current.querySelectorAll(".nav-items");
        if(isopen){
            items.forEach((item, i) => {
                item.style.transform = "translateX(0)"
                items[i].style.transitionDelay = `${i/8}s`
            })
        }
        else{
            items.forEach((item) => item.style.transform = "translateX(40px)")
        }
    }, [isopen]);

    return(
        <div className = "sidebar-page" ref = { Ref }>
            <h5>NAVIGATION</h5>
            <hr></hr>
            <ul className= "Routes" >
                <li className = "nav-items">
                    <span className = "dot">●</span>
                    <Link className = "Links" to = "/">Home</Link>
                </li>
                <li className = "nav-items">
                    <span className = "dot">●</span>
                    <Link className = "Links" to = "/about">About</Link>
                </li>
                <li className = "nav-items">
                    <span className = "dot">●</span>
                    <Link className = "Links" to = "/work">Work</Link>
                </li>
                <li className = "nav-items">
                    <span className = "dot">●</span>
                    <Link className = "Links" to = "/contact">Contact</Link>
                </li>
            </ul>
            <hr className = "small-screen-hr"></hr>
            <div className="social-div">
        
            <Suspense><Socials /></Suspense>
            </div>
        </div>
    )
}
export default Sidebar
