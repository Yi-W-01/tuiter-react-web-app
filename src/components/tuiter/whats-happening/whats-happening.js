import React, {useState} from "react";
import {useDispatch}  from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        console.log(whatsHappening);
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <>
            <div className="row mb-2 mt-2">
                <div className="col-1 justify-content-center">
                    <img className="wd-avatar-image" src="../images/avatar.jpeg" alt="..."/>
                </div>

                <div className="col-11 ps-3">
                  <textarea value={whatsHappening}
                            className="form-control"
                            placeholder="What's happening"
                            onChange={(event) =>
                                setWhatsHappening(event.target.value)}>
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
                        <button onClick={tuitClickHandler} className="btn btn-primary rounded-pill">
                            Tuit
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}
export default WhatsHappening;