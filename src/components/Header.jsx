import React from "react";

function Header()
{
    return         <nav className="navbar">
            <div className="logo"><a href="www.google.com">FlashCards</a></div>
            
            <a className="togglebtn" href="www.google.com"><span className="line"></span>
                <span className="line"></span>
                <span className="line"></span></a>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Create</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            
        </nav>
        





   
}



export default Header;