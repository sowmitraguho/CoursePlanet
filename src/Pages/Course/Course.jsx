import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Course = () => {
  const course = useLoaderData();
  const { title, details, image_url, category_id } = course;
  console.log(course);
  const { name, published_date, img } = course.author;
  return (
    <div>
      <Card style={{ width: "38rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Header>
            <div className="news-author d-flex">
              <Card.Img
                variant="top"
                src={img}
                style={{ width: "3rem", borderRadius: "50%" }}
              />
              <div className="author mx-2">
                <p className="mb-0">{name}</p>
                <p className="mb-0">{published_date}</p>
              </div>
            </div>
          </Card.Header>
          <Card.Text>{details}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Go Back</Button>
            <Link to={`/category/${category_id}`}>
              All News of This Category
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
