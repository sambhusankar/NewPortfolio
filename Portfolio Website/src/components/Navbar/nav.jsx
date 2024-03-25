import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"
function Nav(){
    const navRef = useRef(null);
   //copyright rotation 
    useEffect(() => {
        const logo = navRef.current.querySelector(".logo");
        const copyright = navRef.current.querySelector(".copyright");

        logo.addEventListener("mousemove", () => {
             copyright.style.transform = "rotate(360deg)"
       });
        logo.addEventListener("mouseout", () => {
             copyright.style.transform = "rotate(0deg)"
       });
    }, []);

   //dot visible and invisible
    useEffect(() => {
        const nav_items = navRef.current.querySelectorAll(".nav-item")
        const dots =  navRef.current.querySelectorAll(".dot")
        for(let i = 0; i < nav_items.length; i++){
            nav_items[i].addEventListener("mousemove", () => {
                dots[i].style.fontSize = "1vw";
            })
        };
        for(let i = 0; i < nav_items.length; i++){
            nav_items[i].addEventListener("mouseout", () => {
                dots[i].style.fontSize = "0";
            })
        };
    })
    
    return(
        <div className= "navbar" ref = {navRef}>
            <Link to = "/" className="logo shakable" >
                <p className='copyright'>©</p>
               <p className = "logo-text"> Code By Sankar</p>
            </Link>
            <Link to = "/work" className="nav-item" >
                <p className = "shakable">Work</p>
                <span className = "dot" >●</span>
            </Link>
            <Link to = "/about" className="nav-item" >
                 <p className = "shakable">About</p>
                <span className = "dot" >●</span>
            </Link>
            <Link to = ".contact" className="nav-item" >
                <p className = "shakable">Contact</p>
                <span className = "dot">●</span>
            </Link>
        </div>
    )
}

export default Nav