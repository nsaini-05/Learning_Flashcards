import React from "react";
import ReactDOM from "react-dom";

function Header()
{
    return <div>

<header>
        <nav className="navbar">
            <div className="logo"><a href="#">YourLogo</a></div>
            <a className="togglebtn" href="#"><span className="line"></span>
                <span className="line"></span>
                <span className="line"></span></a>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
        </header>




    </div>
}



export default Header;