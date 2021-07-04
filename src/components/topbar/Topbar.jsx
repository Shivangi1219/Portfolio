import React from 'react'
import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"
function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a className="logo" href="#intro">Shivangi Singh</a>
                    <div className="itemContainer"> 
                        <Person className="icon"/>
                        <span>+1 437 224 3374</span>
                    </div>
                    <div className="itemContainer"> 
                        <Mail className="icon"/>
                        <span>shivangipsingh12@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
