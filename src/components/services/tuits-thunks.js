import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./tuits-service"

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', (thunkAPI) =>
        service.createTuit(thunkAPI))

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () => await service.findAllTuits())

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        (tuit) => service.updateTuit(tuit))
