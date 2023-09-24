import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { add, remove } from "../../store/SubjectSlice";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import "./style.css";

function CheckboxList() {

  const candidateName = useSelector(state => state.name).stringValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkedOptions = useSelector((state) => state.subject);
  const [options, setOptions] = useState([
    { id: 1, label: "AreaUnderTheCurve_21", isChecked: false },
    { id: 2, label: "BinomialTheorem_13", isChecked: false },
    { id: 3, label: "BinomialTheorem_24", isChecked: false },
    { id: 4, label: "AreaUnderTheCurve_15", isChecked: false },
    { id: 5, label: "AreaUnderTheCurve_2", isChecked: false },
    { id: 6, label: "BinomialTheorem_3", isChecked: false },
    { id: 7, label: "BinomialTheorem_4", isChecked: false },
    { id: 8, label: "AreaUnderTheCurve_5", isChecked: false },
  ]);

  const checkedSubjectList = options.map((option) => (
    <ListGroup.Item className="list_Item">
      <div className="subject_id" key={option.id}>
        <label className="labels">
          <input
            className="labels"
            type="checkbox"
            checked={option.isChecked}
            onChange={() => handleCheckboxChange(option)}
          />
          {option.label}
        </label>
      </div>
    </ListGroup.Item>
  ));

  const handleCheckboxChange = (opt) => {
    const updatedOptions = options.map((option) => {
      if (option.id === opt.id) {
        option = {
          ...option,
          isChecked: option.isChecked === false ? true : false,
        };
        if (option.isChecked) {
          dispatch(add(opt));
        } else {
          dispatch(remove(opt.id));
        }
      }
      return option;
    });
    setOptions(updatedOptions);
  };

  return (
      
      <div className="container container3">
        <h2>Select the following subjects</h2>
        <div className="container2">
          <ListGroup>{checkedSubjectList}</ListGroup>

          <div className="included_Subjects">
            <h2>Subjects Included by {candidateName}</h2>
            <ul>
              {checkedOptions.map((option) => (
                <li key={option.id}>{option.label}</li>
              ))}
            </ul>
            <div className="timer">Timer: {checkedOptions?.length * 5}</div>
            <div className="start_Test">
              <Button
                className="button_Start"
                variant="success"
                onClick={() => {
                  navigate("/one");
                }}
              >
                Start The Test
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
}
export default CheckboxList;
