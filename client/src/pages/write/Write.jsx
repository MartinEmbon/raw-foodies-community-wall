import React from 'react';
import "./write.css"

const Write = () => {
    return ( 
        <div className="write">
            <img 
            className="writeImg"
            src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input style={{display:"none"}} type="file" id="fileInput" />
                    <input className="writeInput" autoFocus={true} type="text" placeholder="Title" />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        className="writeInput writeText" 
                        type="text" 
                        placeholder="Tell your story"
                        ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
     );
}
 
export default Write;