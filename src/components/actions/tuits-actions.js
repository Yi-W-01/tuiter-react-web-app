import * as service from '../services/tuits-service';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const createTuit = async (dispatch, tuit) => {
    tuit = {
        "avatar_img": "../../images/avatar.jpeg",
        "postedBy":{
            "userName": "Jose"
        },
        "title":tuit.tuit,
        "handle":"@Jose",
        "stats": {
            "replies": "0",
            "retuits": "0",
            "likes": "0"
        },
        "liked":false,
    };
    console.log(tuit);
    const newTuit = await service.createTuit(tuit);
    dispatch({
        type: CREATE_TUIT,
        newTuit
    });
}

export const findAllTuits = async (dispatch) => {
    const tuits = await service.findAllTuits();
    dispatch({
        type: FIND_ALL_TUITS,
        tuits
    });
}

export const updateTuit = async (dispatch, tuit) => {
    const status = await service.updateTuit(tuit);
    dispatch({
        type: UPDATE_TUIT,
        tuit
    });
}

export const deleteTuit = async (dispatch, tuit) => {
    const response = await service.deleteTuit(tuit);
    dispatch({
        type: DELETE_TUIT,
        tuit
    });
}