import React from 'react';
import "./singlepost.css"

const SinglePost = () => {
    return ( 
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                className="singlePostImg"
                src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            <h1 className="singlePostTitle">
                Lorem, ipsum dolor eat.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:<b>Safak</b></span>
                <span className="singlePostDate">1 hour ago</span>                
            </div>
            <p className="singlePostDesc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Delectus possimus quis qui labore amet cupiditate doloribus,
                    unde deleniti dolor debitis sapiente provident,                     
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Delectus possimus quis qui labore amet cupiditate doloribus,
                    unde deleniti dolor debitis sapiente provident,                     
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Delectus possimus quis qui labore amet cupiditate doloribus,
                    unde deleniti dolor debitis sapiente provident,                     
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Delectus possimus quis qui labore amet cupiditate doloribus,
                    unde deleniti dolor debitis sapiente provident,                     
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Delectus possimus quis qui labore amet cupiditate doloribus,
                    unde deleniti dolor debitis sapiente provident,                     
                </p>
            </div>
        </div>
     );
}
 
export default SinglePost;