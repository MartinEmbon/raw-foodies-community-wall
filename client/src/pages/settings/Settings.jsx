import React from 'react';
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

const Settings = () => {
    return ( 
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update our Account</span>
                    <span className="settingsDeleteTitle">Delete our Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NRWZAPUFY2hP2k1MrEyHEBox2zCSgBXwaNHq1fCKw684FMIYH25NPu42jxzntD3bLc0&usqp=CAU" alt="" />
                        <label htmlFor="fileInput">
                        <i className=" settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" name="" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Safak"/>
                    <label>Email</label>
                    <input type="email" placeholder="Safak@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>            
        </div>
     );
}
 
export default Settings;