// import {
//     CREATE_TUIT,
//     DELETE_TUIT,
//     FIND_ALL_TUITS,
//     UPDATE_TUIT,
// }
//     from "../../actions/tuits-actions";
//
// const tuitsReducer = (state = [], action) => {
//     switch (action.type) {
//
//         case UPDATE_TUIT:
//             return state.map(tuit => {
//                 if(tuit._id === action.tuit._id) {
//                     if(tuit.liked === true) {
//                         tuit.liked = false;
//                         tuit.stats.likes--;
//                     } else {
//                         tuit.liked = true;
//                         tuit.stats.likes++;
//                     }
//                     return tuit;
//                 } else {
//                     return tuit;
//                 }
//             });
//
//         case CREATE_TUIT:
//             return [
//                 ...state,
//                 action.newTuit
//             ];
//
//         case FIND_ALL_TUITS:
//             return action.tuits;
//
//         case DELETE_TUIT:
//             return state.filter(
//                 tuit => tuit._id !== action.tuit._id);
//
//         // case 'like-tuit':
//         // return state.map(tuit => {
//         //     if(tuit._id === action.tuit._id) {
//         //         if(tuit.liked === true) {
//         //             tuit.liked = false;
//         //             tuit.stats.likes--;
//         //         } else {
//         //             tuit.liked = true;
//         //             tuit.stats.likes++;
//         //         }
//         //         return tuit;
//         //     } else {
//         //         return tuit;
//         //     }
//         // });
//         default:
//             return state;
//     }
// }
//
// export default tuitsReducer;
import {createSlice} from "@reduxjs/toolkit";
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "username": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "dislikes": 0,
    "likes": 0
}


const tuitsSlice = createSlice({
    name: "tuits",
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]: (state) => {
            state.loading = true;
            state.tuits = []
        },
        [findTuitsThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.tuits = payload;
        },
        [findTuitsThunk.rejected]: (state) => {
            state.loading = false
        },
        [deleteTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.tuits = state.tuits.filter(t => t._id !== payload)
        },
        [createTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.tuits.push(payload);
        },
        [updateTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            const tuitNdx = state.tuits.findIndex(t => t._id === payload._id);
            state.tuits[tuitNdx] = {...state.tuits[tuitNdx], ...payload}
        }
    },
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        }
    }
})

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;