import React, {useEffect} from "react";
import NavigationSidebar from "../NavigationSidebar/navigation-sidebar";
import ExploreComponent from "./explore-component";
import WhoToFollowList from "../WhoToFollowList/who-to-follow-list";
import { useDispatch } from "react-redux";

const ExploreScreen = () => {
    const dispatch = useDispatch();

    const setNavActive = (active) => {
        return {
            type: "change-active",
            active,
        };
    };

    useEffect(() => {
        dispatch(setNavActive("Explore"));
    }, [dispatch]);

    return(
        // <div className="row mt-2">
        //     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        //         <NavigationSidebar active="Explore"/>
        //     </div>
        //     <div className="col-10 col-md-10 col-lg-7 col-xl-6"
        //          style={{"position": "relative"}}>
        <>
            <ExploreComponent active={"For you"}/>
        </>
        // </div>
            // <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            //     <WhoToFollowList/>
            // </div>
        // </div>

    );
};
export default ExploreScreen;
