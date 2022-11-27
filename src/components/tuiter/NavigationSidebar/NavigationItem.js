
import {Link} from "react-router-dom";

const NavigationItem = ({
                            navigation= {
                                link:"/",
                                icon:"fa-solid fa-hashtag",
                                title:"Explore"
                            }, active
                        }) => {
    return(
         <Link className={`list-group-item 
        ${navigation.title === active? 'active' : ''}`} to={navigation.link}>
            <i className={navigation.icon}></i>
            <span className="d-none d-xl-inline" >  {navigation.title}</span>
         </Link>
    
    );
}

export default NavigationItem;