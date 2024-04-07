import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"
import Sidebar from '../Sidebar/sidebar'

function Nav(){
    const navRef = useRef(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
   //copyright rotation and logo text change
    useEffect(() => {
        const logo = navRef.current.querySelector(".logo");
        const copyright = navRef.current.querySelector(".copyright");
        const logo_text = navRef.current.querySelector(".logo-text");
        let interval1;
        let interval2;

        logo.addEventListener("mouseover", () => {
             copyright.style.transform = "rotate(360deg)"

             clearInterval(interval2)
             interval1 = setInterval(() => {
                logo_text.scrollLeft += 1
             }, 5);
       });
        logo.addEventListener("mouseout", () => {
             copyright.style.transform = "rotate(0deg)"

             clearInterval(interval1)
             interval2 = setInterval(() => {
                logo_text.scrollLeft -= 1
             }, 5);
       });
    }, []);

   //dot visible and invisible
    useEffect(() => {
        const nav_items = navRef.current.querySelectorAll(".nav-item");
        const dots =  navRef.current.querySelectorAll(".dot");

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

    }, []);

   // showing side-bar on scroll
   useEffect(() => {
        const side_bar = navRef.current.querySelector(".side-bar");
        document.addEventListener("scroll", () => {
        if(window.scrollY > 60){
            side_bar.style.opacity = "1"
        }
        else{
            side_bar.style.opacity = "0"
        }
   }, [window.scrollY])
    
}, []);

   // handling sidebar opening
   function handleSidebar(){

        const sidebar = navRef.current.querySelector(".side-bar")
        const sidebar_childs = navRef.current.querySelectorAll(".side-bar-text")
        setSidebarOpen( ! sidebarOpen)
        sidebar_childs[0].classList.toggle("cross1")
        sidebar_childs[1].classList.toggle("cross2")
        sidebar.classList.toggle("sidebar_active")      
   };
   
   //showing the side-bar button in small screens 
   useEffect(() => {
    const side_bar = navRef.current.querySelector(".side-bar")
    if(document.body.offsetWidth <= 500 && sidebarOpen == true){
        side_bar.style.opacity = "1"
       }
    else if(window.scrollY == 0 && sidebarOpen == false){
        side_bar.style.opacity = "0"
    }

   }, [ sidebarOpen ])

  

    return(
        <div className= "navbar" ref = {navRef}>
            <Link to = "/" className="logo shakable" >
                <p className='copyright'>©</p>
               <p className = "logo-text"> <span>Code by Sankar</span> <span>Sambhu Sankar</span>  </p>
            </Link>

            <button className = "menu shakable" onClick = {handleSidebar}>● Menu</button>
            <button className = "side-bar shakable" onClick = {handleSidebar}>
                <p className = "side-bar-text">───</p>
                <p className = "side-bar-text">───</p>
            </button>

            <Link to = "/work" className="nav-item" >
                <p className = "shakable">Work</p>
                <span className = "dot" >●</span>
            </Link>
            <Link to = "/about" className="nav-item" >
                 <p className = "shakable">About</p>
                <span className = "dot" >●</span>
            </Link>
            <Link to = "/contact" className="nav-item" >
                <p className = "shakable">Contact</p>
                <span className = "dot">●</span>
            </Link>
            <Sidebar isopen = { sidebarOpen }/>
        </div>
    )
}

export default Nav