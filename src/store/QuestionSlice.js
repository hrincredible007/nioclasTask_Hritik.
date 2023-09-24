import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};
const QuestionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        fetchData(state, action){
            state.data.push(action.payload);
        }
    }
 
});
export const {fetchData } = QuestionSlice.actions;
export default QuestionSlice.reducer;

export function getQuestions(params){
    return async function createA(dispatch, getState){
        const data = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${params}`);
        const result = await data.json();
        dispatch(fetchData(result));
    }
}