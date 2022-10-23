import React from "react";
import homeposts from './homepost.json';
import PostListItem from "./post-list-item";
import "./home.css";
import "./bookmarks.css";


const PostList = () => {

    return(
        <>
            <div className="wd-grid-content">
                {homeposts.map(homepost=>{
                    return(<PostListItem homepost={homepost}/>);
                })
                }
            </div>
        </>
    );
}
export default PostList;