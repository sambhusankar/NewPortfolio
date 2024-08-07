import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./nav.css"
const Sidebar = React.lazy(() => import('../Sidebar/sidebar')) 
import Magnetic from '../../Animations/magnetic';
import "../../Animations/hover-effect.css"

function Nav(color){
    const navRef = useRef(null);
    const loc = useLocation()
    const [sidebarOpen, setSidebarOpen] = useState(false);

    //setting the text color in different components
    useEffect(() => {
        for(let i = 0; i < navRef.current.children.length; i++){
       navRef.current.children[i].style.color = color.color

        }
    }, [])
    ;
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
        const paths = ["/work", "/about", "/contact"]
        for(let i = 0; i < nav_items.length; i++){
            nav_items[i].addEventListener("mousemove", () => {
                dots[i].style.fontSize = "1vw";
            })
        };

        for(let i = 0; i < nav_items.length; i++){
            nav_items[i].addEventListener("mouseout", () => {
                if(paths[i] != loc.pathname){
                dots[i].style.fontSize = "0";
                }
            })
        };
    

    }, []);

    // showing the on active pages
    useEffect(() => {
        const dots =  navRef.current.querySelectorAll(".dot");
        if(loc.pathname == "/work"){
            dots[0].style.fontSize = "1vw"
            dots[1].style.fontSize = "0vw"
            dots[2].style.fontSize = "0vw"
        }
        if(loc.pathname == "/about"){
            dots[0].style.fontSize = "0vw"
            dots[1].style.fontSize = "1vw"
            dots[2].style.fontSize = "0vw"
        }
        if(loc.pathname == "/contact"){
            dots[0].style.fontSize = "0vw"
            dots[1].style.fontSize = "0vw"
            dots[2].style.fontSize = "1vw"
        }
    }, [loc.pathname])
    
   // showing side-bar on scroll
   useEffect(() => {
        const side_bar = navRef.current.querySelector(".side-bar");
        document.addEventListener("scroll", () => {
        if(window.scrollY > 60){
            side_bar.style.transform = "scale(100%)"
        }
        else{
            side_bar.style.transform = "scale(0%)"
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
    Magnetic(side_bar)
    if(document.body.offsetWidth <= 500 && sidebarOpen == true){
        side_bar.style.transform = "scale(100%)"
       }
    else if(window.scrollY == 0 && sidebarOpen == false){
        side_bar.style.transform = "scale(0)"
    }

   }, [ sidebarOpen ]);

   useEffect(() => {
        
    const element = document.querySelector(".overlay")
    if(element){
    element.addEventListener("click", () => {
       handleSidebar()
    })
}
}, [ sidebarOpen ]);

    return(
        <div className= "navbar" ref = {navRef}>
            <Link to = "/" className="logo shakable" >
                <p className='copyright'>©</p>
               <p className = "logo-text" > <span>Code by Sankar</span> <span>Sambhu Sankar</span>  </p>
            </Link>

            <button className = "menu shakable" onClick = {handleSidebar}>● Menu</button>
            <button className = "side-bar hover-effect" onClick = {handleSidebar}>
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
            <Suspense><Sidebar isopen = { sidebarOpen }/></Suspense>
        </div>
    )
}

export default Nav