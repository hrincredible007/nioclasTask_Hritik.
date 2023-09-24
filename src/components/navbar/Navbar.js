import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, to} from 'react-router-dom'
const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/" as = {Link}>TEST</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/about" as = {Link}>About</Nav.Link>
            <Nav.Link to="/problems" as = {Link}>Problem Lists</Nav.Link>
            <Nav.Link to="/startthetest" as = {Link}>TestLayout</Nav.Link>
            {/* <Nav.Link href="#link">Problem Lists</Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;