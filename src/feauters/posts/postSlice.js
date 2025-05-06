import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, descr: "lajlk asdflksjdaf masdfsal asdfjlas falsdf"},
    {id: 2, descr: "alfjaslf asf;lsad;fksaf asfsaldfks sanur"}
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {}
})

export default postSlice.reducer;