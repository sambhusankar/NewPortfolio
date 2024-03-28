import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"
function Nav(){
    const navRef = useRef(null);
    
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


    
    return(
        <div className= "navbar" ref = {navRef}>
            <Link to = "/" className="logo shakable" >
                <p className='copyright'>©</p>
               <p className = "logo-text"> <span>Code by Sankar</span> <span>Sambhu Sankar</span>  </p>
            </Link>

            <button className = "menu shakable">● Menu</button>

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