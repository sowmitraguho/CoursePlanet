import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";


const Header = () => {
  const {user, LogOut} = useContext( AuthContext );
  
  const handleLogOut = () => {
    LogOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.error(error)
    });
  }


  return (
    <>
      <Navbar className="mb-3" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand ><Link style={{textDecoration: "none", color: "white"}} to="/">CoursePlanet</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link style={{textDecoration: "none", color: "white"}} to="/">Home</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration: "none", color: "white"}} to="/">Courses</Link></Nav.Link>
            <Nav.Link> <Link style={{textDecoration: "none", color: "white"}} to="/"> Pricing</Link> </Nav.Link>
            <Nav.Link>FAQ</Nav.Link>
            <Nav.Link> Blog</Nav.Link>
          </Nav>
        </Container>
        <Nav>
          <Nav.Link>
            {user ? 
            <div className="d-flex">
            <div >
            <img 
            style={{width: "30px", borderRadius: "50%"}} 
            src={user.photoURL} 
            /> <br />
            <span>{user.displayName}</span>
            </div>
            
            <Button onClick={handleLogOut} variant="primary">LogOut</Button>
            </div>
            :
            <ButtonGroup className="mx-4">
        <Link to="/login" className="btn btn-primary">LogIn</Link>
          <Link to="/register" className="btn btn-primary">Sign up</Link>
        </ButtonGroup>
          }
          </Nav.Link>
        </Nav>
        
      </Navbar>
    </>
  );
};

export default Header;
