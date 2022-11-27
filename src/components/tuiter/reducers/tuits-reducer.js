import {
    CREATE_TUIT,
    DELETE_TUIT,
    FIND_ALL_TUITS,
    UPDATE_TUIT,
}
    from "../../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {

        case UPDATE_TUIT:
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });

        case CREATE_TUIT:
            return [
                ...state,
                action.newTuit
            ];

        case FIND_ALL_TUITS:
            return action.tuits;

        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);

        // case 'like-tuit':
        // return state.map(tuit => {
        //     if(tuit._id === action.tuit._id) {
        //         if(tuit.liked === true) {
        //             tuit.liked = false;
        //             tuit.stats.likes--;
        //         } else {
        //             tuit.liked = true;
        //             tuit.stats.likes++;
        //         }
        //         return tuit;
        //     } else {
        //         return tuit;
        //     }
        // });
        default:
            return state;
    }
}

export default tuitsReducer;