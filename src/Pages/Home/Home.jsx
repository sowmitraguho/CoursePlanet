import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Shared/CourseSummary/CourseSummary';

const Home = () => {
    const AllCourses = useLoaderData();
    return (
        <div>
           <h2>This is Home!! All Courses {AllCourses.length}</h2>
           {
                AllCourses.map( (course) => <CourseSummary
                key = {course.id}
                course = {course}>

                </CourseSummary>)
            }

        </div>
    );
};

export default Home;