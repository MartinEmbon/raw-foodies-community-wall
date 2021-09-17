import React from 'react';
import {Link} from "react-router-dom"
import "./topbar.css"

const TopBar = () => {
    const user = false;
    return ( 
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link"to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link"to="/about">About</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link"to="/contact">Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link"to="/write">Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && "Logout"}                        
                    </li>                    
                </ul>
            </div>
            <div className="topRight">
                {
                user ? (
                    <img 
                        className="topImage"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NRWZAPUFY2hP2k1MrEyHEBox2zCSgBXwaNHq1fCKw684FMIYH25NPu42jxzntD3bLc0&usqp=CAU" 
                        alt="" 
                        />                                                                
                ) : (                    
                    <ul className="topList">
                        <li className="topListItem"><Link className="link" to="/register">Register</Link></li>
                        <li className="topListItem"><Link className="link" to="/login">Login</Link></li>                    
                    </ul>
                )
            }             
            <i className="topSearchIcon fas fa-search"></i>   
            </div>
        </div>
     );
}
 
export default TopBar;