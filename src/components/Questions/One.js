import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/QuestionSlice";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useNavigate } from "react-router-dom";

function One() {
  const [variable, setVariable] = useState(" ");

  const questionData = useSelector((state) => state.data).data;
  const navigate = useNavigate();
  const questions = useSelector((state) => state.subject);
  console.log(questions);
  const dispatch = useDispatch();

  const selectedQuestions = () => {
    questions.map((q, key) => {
      dispatch(getQuestions(q.label));
    });
  };
  // selectedQuestions();

  console.log(questionData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowSubmitButton(false); // Hide the submit button
    } else {
      setShowSubmitButton(true); // Show the submit button on the last question
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowSubmitButton(false); // Hide the submit button
    }
  };

  const handleAnswerChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
  };
  useEffect(() => {
    selectedQuestions();
  }, []);

  const showQuestion = () => {
    let quest = questionData?.[currentQuestionIndex]?.[0]?.Question;
    console.log(quest);
    quest = String(quest);
    let wd = quest.replaceAll("\\", "\\\\");
    // wd = wd.replaceAll("$", "");
    console.log(wd);
    setVariable(wd);
    console.log(variable);
    return wd;
  };

  const handleSubmit = () => {
    // Process and submit the answers here
    console.log("Answers:", answers);
    alert("Exam Submitted");
    navigate("/result");
    // useNavigate('/')s
  };
  return (
    <MathJaxContext>
      <div className="container">
        <h1>Question {questions[currentQuestionIndex]?.id}:</h1>
        <div>
          <MathJax>
            {`\\(${questionData?.[currentQuestionIndex]?.[0]?.Question}\\`}
          </MathJax>
        </div>
        <input
          // questions[currentQuestionIndex]?.label
          type="text"
          value={answers[currentQuestionIndex]}
          onChange={handleAnswerChange}
        />

        {/* <button
          onClick={showQuestion}
          disabled={currentQuestionIndex === questions.length}
        > */}
          {/* Show
        </button> */}
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button
          onClick={() => {
            handleNext();
          }}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </button>
        {!showSubmitButton && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </MathJaxContext>
  );
}

export default One;
