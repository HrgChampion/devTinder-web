import { createSlice } from "@reduxjs/toolkit";

const connnectionSlice = createSlice({
    name:"connection",
    initialState:null,
    reducers:{
        addConnection:(state,action) =>{
            return action.payload
        },
        removeConnection:(state,action) => null
    }
})

export const {addConnection,removeConnection} = connnectionSlice.actions;
export default connnectionSlice.reducer;