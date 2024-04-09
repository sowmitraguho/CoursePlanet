import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import LogIn from "../../Pages/Client/LogIn/LogIn";
import Home from "../../Pages/Home/Home";
import Categories from "../../Pages/Categories/Categories";
import Course from "../../Pages/Course/Course";
import SignUp from "../../Pages/Client/SignUp/SignUp";
import TermsAndConditions from "../../Pages/Client/TermsAndConditions/TermsAndConditions";


export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:8000/course`)
            },
            {
                path: '/category/:id',
                element: <Categories></Categories>,
                loader: ({params}) => fetch(`http://localhost:8000/categories/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`http://localhost:8000/course/${params.id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },{
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },

        ]
    }
])