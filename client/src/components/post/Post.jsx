import React from 'react';
import "./post.css"
import {Link} from "react-router-dom"

const Post = () => {
    return ( 
        <div className="post">
            <img 
            className="postImg"
            src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    <Link className="link" to="/post/:postid">Lorem ipsum dolor sit.</Link>
                    </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Martin orem ipsum dolor sit amet consectetur, adipisicing elit. 
                Numquam, odit totam tempora alias ratione quisquam itaque magni, autem, 
                labore dolore quos delectus porro fugiat veniam voluptates quae? Enim, 
                fuga! Dolore!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Numquam, odit totam tempora alias ratione quisquam itaque magni, autem, 
                labore dolore quos delectus porro fugiat veniam voluptates quae? Enim, 
                fuga! Dolore!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Numquam, odit totam tempora alias ratione quisquam itaque magni, autem, 
                labore dolore quos delectus porro fugiat veniam voluptates quae? Enim, 
                fuga! Dolore!
            </p>
        </div>
     );
}
 
export default Post;