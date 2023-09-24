import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from '../../store/QuestionSlice';

const TestLayout = () => {
  // Selected SUbjects to Display

  const checkedSubjects = useSelector(state => state.subject);
  console.log(checkedSubjects);
  const dispatch = useDispatch();
  
  const data = useSelector(state => state.data).data;
  console.log(data);
  // console.log(checkedSubjects);


  // useEffect(() => {
     // dispatch(getQuestions('BinomialTheorem_3'));
  // }, [])

  // write in react that there is a list of questions and one question appears on a screen at a time and the next and previous button to navigate through all the questions and at the last question instead of next button submit button displays and on clicking on it exam ends
 
  return (
    <>
      {/* <button onClick={() => {dispatch(getQuestions('BinomialTheorem_24'))}}>Click Me</button>
      {JSON.stringify(checkedSubjects)} */}
      <div className="container">

      </div>
    </>
  )
}

export default TestLayout