import React, {useState} from "react";
import {useDispatch, useSelector}  from "react-redux";
import {createTuit} from "../../actions/tuits-actions";

const WhatsHappening = () => {
    const tuits = useSelector(
        state => state.tuits);

    const [newTuit, setNewTuit] =
        useState({tuit:''});

    const dispatch = useDispatch();

    return (
        <>
            <div className="row mb-2 mt-2">
                <div className="col-1 justify-content-center">
                    <img className="wd-avatar-image" src="../images/avatar.jpeg" alt="..."/>
                </div>

                <div className="col-11 ps-3">
                  <textarea value={newTuit.tuit}
                            className="form-control"
                            placeholder="What's happening"
                            onChange={(e) =>
                                setNewTuit({...newTuit,
                                    tuit: e.target.value})}>
                  </textarea>
                </div>

                <div className="row mb-2">
                    <div className="col-10">
                        <i className="col-1 fa-regular fa-image"/>
                        <i className="col-1 fa fa-chart-line"/>
                        <i className="col-1 fa-regular fa-face-smile"/>
                        <i className="col-1 fa-regular fa-calendar"/>
                    </div>
                    <div className="col-1">
                        <button onClick={() =>
                            createTuit(dispatch, newTuit)} className="btn btn-primary rounded-pill">
                            Tuit
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}
export default WhatsHappening;