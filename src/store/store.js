import { configureStore } from "@reduxjs/toolkit";
import SubjectSlice from "./SubjectSlice";
import NameSlice from "./NameSlice";
import QuestionSlice from "./QuestionSlice";
const store = configureStore({
    reducer: {
        subject: SubjectSlice,
        name: NameSlice,
        data: QuestionSlice

    }
});

export default store;