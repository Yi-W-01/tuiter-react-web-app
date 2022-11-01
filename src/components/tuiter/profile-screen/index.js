import React, {useState, useEffect}  from "react";
import {useSelector, useDispatch} from "react-redux";
import ProfileComponent from "./profile-component";

const ProfileScreen = () => {
    const profile = useSelector(state => state.profile);

    const dispatch = useDispatch();

    const setNavActive = (active) => {
        return {
            type: "change-active",
            active,
        };
    };

    useEffect(() => {
        dispatch(setNavActive("Profile"));
    }, [dispatch]);

    return(
        <>
            <ProfileComponent profile={profile}/>
        </>
    )
}
export default ProfileScreen;