import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const EditProfile =() =>{
    const profile = useSelector((state) => state.profile);

    let [name, setProfileName] = useState(profile.name);
    let [bio, setProfileBio] = useState(profile.bio);
    let [location, setProfileLocation] = useState(profile.location);
    let [website, setProfileWebsite] = useState(profile.website);
    let [dateOfBirth, setProfileDateOfBirth] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();

    const editProfileClickHandler = (profile) => {
        dispatch({
            type: 'edit-profile',
            name: profile.name,
            bio:profile.bio,
            location:profile.location,
            website:profile.website,
            dateOfBirth:profile.dateOfBirth,
        });

    }


    return(
        <>
            <div className="row mt-2  px-3">
                <div className="col-1 flex">
                    <Link to="/tuiter/profile" >
                        <i className="fa-solid fa-xmark text-white mt-2"/>
                    </Link>
                </div>
                <div className="col-9 align-self-center">
                    <h5 className="mb-0 wd-font-size-15">Edit profile</h5>
                </div>

                <div className="col-2 align-self-center">
                    <Link to="/tuiter/edit-profile">
                        <button onClick={()=>editProfileClickHandler(profile)}
                            className="btn btn-outline-dark rounded-pill wd-btn-save">Save</button>
                    </Link>
                </div>
            </div>


            <div className="position-relative mb-4">
                <div>
                    <img src={profile.bannerPicture} className="wd-profile-banner"/>
                </div>
                <div className="d-flex justify-content-between px-3">
                    <div >
                        <img src={profile.profilePicture} alt="" className="wd-profile-picture"/>
                    </div>
                </div>
            </div>

            <form className="pt-5">
                <div className="form-group my-2 wd-edit-profile-form-border">
                    <label htmlFor="name" className="form-label mx-3 wd-font-size-13">Name</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control wd-edit-profile-font-color-white"
                        placeholder={profile.name}
                        value={name}
                        onChange={(event) => setProfileName(event.target.value)}/>
                </div>
                <div className="form-group my-2 wd-edit-profile-form-border">
                    <label htmlFor="bio" className="form-label mx-3 wd-font-size-13">Bio</label>
                    <input
                        type="text"
                        className="form-control wd-edit-profile-font-color-white"
                        placeholder={profile.bio}
                        value={bio}
                        onChange={(event) => setProfileBio(event.target.value)}/>
                </div>
                <div className="form-group my-2 wd-edit-profile-form-border">
                    <label htmlFor="location" className="form-label mx-3 wd-font-size-13">Location</label>
                    <input
                        type="text"
                        className="form-control wd-edit-profile-font-color-white"
                        placeholder={profile.location}
                        value={location}
                        onChange={(event) => setProfileLocation(event.target.value)}/>
                </div>
                <div className="form-group my-2 wd-edit-profile-form-border">
                    <label htmlFor="website" className="form-label mx-3 wd-font-size-13">Website</label>
                    <input
                        type="text"
                        className="form-control wd-edit-profile-font-color-white"
                        placeholder={profile.website}
                        value={website}
                        onChange={(event) => setProfileWebsite(event.target.value)}/>
                </div>
                <div className="form-group wd-edit-profile-form-border">
                    <label htmlFor="dateOfBirth" className="form-label mx-3 wd-font-size-13">Date of birth</label>
                    <input
                        type="text"
                        className="form-control wd-edit-profile-font-color-white"
                        placeholder={profile.dateOfBirth}
                        value={dateOfBirth}
                        onChange={(event) => setProfileDateOfBirth(event.target.value)}/>
                </div>
            </form>

        </>

    );
}

export default EditProfile;