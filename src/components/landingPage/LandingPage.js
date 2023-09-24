import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { put } from "../../store/NameSlice";
import { Navigate, useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [uniqueId, setUniqueId] = useState("");

  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const nameInput = useSelector((state) => state.name);
  const dispatch = useDispatch();
  console.log(nameInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/problems");
    // onNameSubmit(name);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-5">
        <Container>
          <h1>Welcome to Our Online Test Platform</h1>
          <p>Test your knowledge and ace your exams!</p>
        </Container>
      </header>

      {/* Name Input Form */}
      <section className="py-5">
        <Container>
          <h2 style={{ marginBottom: "50px" }} className="text-center">
            Please Enter Your Credentials to start the examination.
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nameInput" className="text-right">
              <Form.Control
                style={{ margin: "10px", width: '40%'}}
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  dispatch(put(e.target.value));
                }}
                required
              />
              <Form.Control
                style={{ margin: "10px", width: '40%' }}
                type="number"
                placeholder="Enter your contact number."
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
              <Form.Control
                style={{ margin: "10px", width: '40%' }}
                type="text"
                placeholder="Enter your Unique Id"
                value={uniqueId}
                onChange={(e) => {
                  setUniqueId(e.target.value);
                }}
                required
              />
              <Form.Control
                style={{ margin: "10px", width: '40%' }}
                type="text"
                placeholder="Amity University"
                value={college}
                onChange={(e) => {
                  setCollege(e.target.value);
                }}
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button
                style={{ margin: "10px" }}
                variant="primary"
                type="submit"
              >
                Start Test
              </Button>
            </div>
          </Form>
        </Container>
      </section>
    </div>
  );
}

export default LandingPage;
