import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar className="mb-3" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to='\'>CoursePlanet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to='\'>Home</Nav.Link>
            <Nav.Link to='\courses'>Courses</Nav.Link>
            <Nav.Link to='\pricing'>Pricing</Nav.Link>
            <Nav.Link to='\about'>About Us</Nav.Link>
            <Nav.Link to='\contact'>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
