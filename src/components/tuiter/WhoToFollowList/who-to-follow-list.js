import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item"

import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);

    return(
        <>
            <ul className="list-group mt-2">
            <li className="list-group-item wd-right-bar-font-border wd-right-bar-width">Who to follow</li>
            {
                who.map(who=>{
                    return(<WhoToFollowListItem who={who}/>);
                })
            }
         </ul>
        </>
    );
}
export default WhoToFollowList;