import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Shared/CourseSummary/CourseSummary';

const Categories = () => {
    const AllCourses = useLoaderData();
    console.log(AllCourses);
    return (
        <div>
            {
                AllCourses.map( (course) => <CourseSummary
                key = {course.id}
                course = {course}>

                </CourseSummary>)
            }
        </div>
    );
};

export default Categories;