import React from "react";

import { useSelector } from "react-redux";

const Submit = () => {
  const name = useSelector((state) => state.name).stringValue;
  const selectedQuestions = useSelector((state) => state.subject);
  console.log(selectedQuestions);
  console.log(name);

  const checkedSubjectList = selectedQuestions.map((option) => (
    <div className="subject_id" key={option.id}>
      {/* {option.label} */}

      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Question Id: {option.id}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
          <p className="card-text">{option.label}</p>
          
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <h2 style={{margin: '30px'}}>The test is subitted by : {name}</h2>
      
      <h4 style={{margin: '35px'}}>Questions attempted by {name}: </h4>
      {checkedSubjectList}
    </div>
  );
};
export default Submit;
