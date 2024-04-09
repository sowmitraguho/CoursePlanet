import CourseLinks from "../Pages/Shared/CourseLinks/CourseLinks";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SocialMedia from "../Pages/Shared/SocialMedia/SocialMedia";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2">
                    <CourseLinks></CourseLinks>
                    </Col>
                    <Col lg="7">
                    <Outlet></Outlet>
                    <Footer></Footer>
                    </Col>
                    <Col lg="3">
                    <SocialMedia></SocialMedia>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Main;