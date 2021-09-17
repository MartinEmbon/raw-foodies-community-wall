import React from 'react';
import "./about.css"
import Sidebar from '../../components/sidebar/Sidebar';
//import AboutMe from '../../components/aboutMe/AboutMe';

const About = () => {
    return ( 
            <div className="about">
                <div className="aboutwrapper">
                <div className="singleContact">
                <div className="singleContactWrapper">
                    <img 
                    className="singleContactImg"
                    src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                    <h1 className="singleContactTitle">
                    Lorem, ipsum dolor eat.
                    <div className="singleContactEdit">
                        <i className="singleContactIcon far fa-edit"></i>
                        <i className="singleContactIcon far fa-trash-alt"></i>
                    </div>
                    </h1>
                <div className="singleContactInfo">
                    <span className="singleContactAuthor">Author:<b>Safak</b></span>
                    <span className="singleContactDate">1 hour ago</span>                
                </div>
                <p className="singleContactDesc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Delectus possimus quis qui labore amet cupiditate doloribus,
                    unde deleniti dolor debitis sapiente provident,                                         
                </p>
            </div>
                </div>
                </div>
                <Sidebar/>
            
            </div>
     );
}
 
export default About;