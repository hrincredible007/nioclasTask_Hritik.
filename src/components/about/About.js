import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function About() {
  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-5">
        <Container>
          <h1>Welcome to Our Online Test Platform</h1>
          <p>Test your knowledge and ace your exams!</p>
          <Button variant="light">Get Started</Button>
        </Container>
      </header>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={4}>
              <h2>Practice Exams</h2>
              <p>Access a wide range of practice exams for various subjects.</p>
            </Col>
            <Col md={4}>
              <h2>Real-Time Feedback</h2>
              <p> Provide immediate scoring for objective questions (multiple choice, true/false, etc.) so that test-takers know their score as soon as they submit their answers. Show a progress bar or percentage completed to give test-takers an idea of how far they are into the test and how much time they have left.</p>
            </Col>
            <Col md={4}>
              <h2>Exam Schedules</h2>
              <p>Plan your study sessions with our exam schedules.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center">What Our Users Say</h2>
          <Row>
            <Col md={4}>
              <div className="testimonial">
                <p>"This platform helped me a lot in my exams. Highly recommended!"</p>
                <p className="author">- John Doe</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial">
                <p>"Easy to use and great for practice. Will use it again."</p>
                <p className="author">- Jane Smith</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial">
                <p>"I improved my scores significantly with this platform."</p>
                <p className="author">- Mark Johnson</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p>&copy; 2023 Online Test Platform</p>
        </Container>
      </footer>
    </div>
  );
}

export default About;
