import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    stringValue: '', 
  };

const NameSlice = createSlice({
    name: 'Name',
    initialState,
    reducers:{
        put(state, action){
            state.stringValue = (action.payload);
        }
    }
});
export const {put} = NameSlice.actions;
export default NameSlice.reducer;