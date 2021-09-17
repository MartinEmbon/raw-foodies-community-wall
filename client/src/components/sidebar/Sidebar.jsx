import React from 'react';
import "./sidebar.css"

const Sidebar = () => {
    return ( 
        
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NRWZAPUFY2hP2k1MrEyHEBox2zCSgBXwaNHq1fCKw684FMIYH25NPu42jxzntD3bLc0&usqp=CAU" alt="" />
                <p>Lorem ipsum facilis quos distinctio fugiat possimus. Error officia ex dolorum nisi omnis accusantium dolore aut.</p>
            </div>
        
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;