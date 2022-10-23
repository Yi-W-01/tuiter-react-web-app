import React from "react";
import PostList from "./post-list";

const HomeScreen = () => {
    return(
        <div className="row mt-2">

            <div className="position-relative mb-2">
                <PostList />
            </div>
        </div>
    );
};
export default HomeScreen;