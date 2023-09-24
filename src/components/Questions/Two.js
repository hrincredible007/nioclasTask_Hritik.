import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

function NamePage({ onNameSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameSubmit(name);
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
          <h2 className="text-center">Please Enter Your Name</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nameInput">
              <Form.Control
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Start Test
            </Button>
          </Form>
        </Container>
      </section>
    </div>
  );
}

export default NamePage;
