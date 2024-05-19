import React, { useEffect, useState } from "react"
import Socials from "../Socials/socials"
import "./footer.css"
function Footer(){
    const [ hour, setHour ] = useState(0)
    const [ minute, setMinute ] = useState(0)
    const [merediem, setMerediem ] = useState("")
    const date = new Date()
    
    useEffect(() => {
        setHour(date.getHours())
        setMinute(date.getMinutes())
        setMerediem(hour < 12 ? "AM" : "PM")
    }, [hour, minute, merediem])

    return(
        <footer className="footer">
            <div className="version-time">
                <div>
                    <h5>VERSION</h5>
                    <p>2024©Editon</p>
                </div>
                <div>
                    <h5>LOCAL TIME</h5>
                    <p>{hour} : {minute} {merediem} GMT+5:30</p>
                </div>
            </div>
            <hr></hr>
            <Socials />
            
        </footer>
    )
}
export default Footer