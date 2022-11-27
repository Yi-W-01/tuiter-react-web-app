
import NavigationItem from "./NavigationItem";
import React from "react";
import navigations from "./navigation.json";
import { Link} from 'react-router-dom';
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
    const { active } = useSelector((state) => state.nav);

    return(
        <>
            <div className="list-group pt-2">
                <Link className="list-group-item" to="/"><i className="fa-brands fa-twitter"></i></Link>
            
                {navigations.map(navigation=>{
                    return(<NavigationItem navigation={navigation} active={active}/>);
    })}
            </div>
            
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
