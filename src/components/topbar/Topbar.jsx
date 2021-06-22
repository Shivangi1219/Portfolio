import React from 'react'
import "./topbar.scss"
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a className="logo" href="#intro">Shivangi Singh</a>
                    <div className="itemContainer"> 
                        <PersonIcon className="logo"/>
                        <span>+1 437 224 3374</span>
                    </div>
                    <div className="itemContainer"> 
                        <MailIcon className="mail"/>
                        <span>shivangipsingh12@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger">
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
