import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';

import "./contact.css"

const Contact = () => {
    return ( 
        <div className="contact">            
        <div className="contactwrapper">
            <span className="contactTitle">contact</span>
            <form className="contactForm">
                <label>Email</label>
                <input className="contactInput" type="text" placeholder="Enter email" />
                <label>Password</label>
                <input className="contactInput" type="password" placeholder="Enter password" />
                <button className="contactButton">contact</button>
            </form>            
        </div>
            <Sidebar/>                                
        </div>
        
     );
}
 
export default Contact;