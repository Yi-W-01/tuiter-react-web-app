import "./index.css";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/navigation-sidebar";
import whoReducer from "./reducers/who-reducer";
import WhoToFollowList
    from "./WhoToFollowList/who-to-follow-list";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import navReducer from "./reducers/nav-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ExploreScreen from "../tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "../tuiter/HomeScreen";
import ProfileScreen from "../tuiter/ProfileScreen";
import EditProfile from "../tuiter/ProfileScreen/edit-profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
const reducer = combineReducers({
    tuits: tuitsReducer,
    who: whoReducer,
    profile: profileReducer,
    nav: navReducer,
});
const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar />
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <Routes>
                    <Route path="/home/"    element={<HomeScreen/>}/>
                    <Route path="/explore/" element={<ExploreScreen/>}/>
                    <Route path="/profile/" element={<ProfileScreen/>}/>
                    <Route path="/edit-profile/" element={<EditProfile/>}/>
                </Routes>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
    );
};
export default Tuiter;