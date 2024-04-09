import { ButtonGroup, Button } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaTwitch, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";

const SocialMedia = () => {
  return (
    <div>
      <ButtonGroup className="w-100" vertical>
        <Button
          className="mb-2"
          variant="outline-primary"
        >
          {" "}
          <FaGoogle></FaGoogle> LogIn with Google
        </Button>
        <Button variant="outline-dark">
          {" "}
          <FaLinkedin></FaLinkedin> LogIn with LinkedIn
        </Button>
      </ButtonGroup>
      <h5 className="my-2">Find Us On </h5>
      <ListGroup>
        <ListGroup.Item className="mb-2"> <FaFacebook></FaFacebook> Facebook </ListGroup.Item>
        <ListGroup.Item className="mb-2"> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
        <ListGroup.Item className="mb-2"> <FaTwitch></FaTwitch> Twitch </ListGroup.Item>
        <ListGroup.Item className="mb-2"> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
        <ListGroup.Item className="mb-2">Click For More</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SocialMedia;
