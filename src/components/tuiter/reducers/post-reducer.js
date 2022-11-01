import post from "../data/posts.json"
import {createSlice} from "@reduxjs/toolkit";

const postReducer = createSlice( {
    name: "post",
    initialState: post
});

export default postReducer.reducer;