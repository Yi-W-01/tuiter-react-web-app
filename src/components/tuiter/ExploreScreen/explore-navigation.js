import React from "react";

const ExploreNavigation = (
    {
        navigation = {
            link: "#",
            title: "For you",
        },active
    }) =>{
    return(
        <li className="nav-item">
            <a className={`nav-link ${navigation.title===active? 'active':''} 
            ${navigation.title==='Entertainment'?'d-none d-md-block':''}`} href={navigation.link}>{navigation.title}</a>
        </li>
    )
}

export default ExploreNavigation;