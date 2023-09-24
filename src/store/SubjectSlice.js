import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const SubjectSlice = createSlice({
    name: 'subject',
    initialState,
    reducers: {
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            return state.filter(item => item.id !== action.payload);
        }
    }

});
export const {add, remove} = SubjectSlice.actions;
export default SubjectSlice.reducer;