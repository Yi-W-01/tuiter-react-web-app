import React from "react";
import explores from "./explores.json";
import PostSummaryList from "../PostSummaryList/post-summary-list";
import ExploreNavigation from "./explore-navigation";
import "./explore.css"

const ExploreComponent = ({active = 'For you'}) => {
    return(
        <>
              <div className="position-relative">
                <i className="fa-solid fa-magnifying-glass wd-position-search-icon"></i>
                <input id="search-input" className="wd-search-input wd-rounded-corners-all-around " type="text" placeholder="Search Tuiter"/>
                <a href="explore-settings.html"><i className="fa-solid fa-gear fa-2x wd-search-gear"></i></a>
              </div>


            <ul className="nav nav-tabs wd-grid-heading-bar pt-2 pb-2">
                {explores.map(navigation => {
                    return (<ExploreNavigation navigation={navigation} active={active}/>)
                })}
            </ul>


            <div className="position-relative mb-2">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" className="card-img-top" alt=""/>
                <div className="position-absolute wd-img-title-pos">
                    <span className="wd-img-title-font">SpaceX's Starship</span>
                </div>
            </div>

           <PostSummaryList />
        </>
    );
}
export default ExploreComponent;
