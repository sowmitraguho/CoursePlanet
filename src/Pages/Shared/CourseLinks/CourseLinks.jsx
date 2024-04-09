import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CourseLinks = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h4>All Categories: {categories.length}</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CourseLinks;
