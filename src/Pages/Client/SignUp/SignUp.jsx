import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {creatUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        creatUser( email, password)
        .then((result) => {
            
            const user = result.user;
            console.log(user);
            user.photoURL = photoURL;
            user.displayName = name;
            form.reset();
            
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          });
    }
    const handleAccepted = event => {
      console.log(event.target.checked);
      setAccepted(event.target.checked);
    }
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Enter your photoURL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccepted} type="checkbox" label="Accept Our Terms And Condition" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Submit
      </Button>
      <Form.Text className="text-muted">{error}</Form.Text>
    </Form>
  );
};

export default SignUp;
