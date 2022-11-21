import "./index.css";
import {Outlet} from "react-router-dom";

import {Routes, Route} from "react-router";
import NavigationSidebar from "./navigation-sidebar/index";
import whoReducer from "./reducers/who-reducer";
import WhoToFollowList
    from "./who-to-follow-list/index";
import HomeComponent from "./home-screen";
import ExploreComponent from "./explore";
import ProfileComponent from "./profile-screen";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import navReducer from "./reducers/nav-reducer";
import postReducer from "./reducers/post-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
    tuits: tuitsReducer,
    who: whoReducer,
    profile: profileReducer,
    nav: navReducer,
    post: postReducer,
});

const store = configureStore({
    reducer: {
        tuitsData: tuitsReducer, who: whoReducer, profile: profileReducer
    }
})

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar />
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Routes>
                        <Route path="/home/"    element={<HomeComponent/>}/>
                        <Route path="/explore/" element={<ExploreComponent/>}/>
                        <Route path="/" element={<ExploreComponent/>}/>
                        <Route path="/profile/" element={<ProfileComponent/>}/>
                        {/*<Route path="/edit-profile/" element={<EditProfile/>}/>*/}
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