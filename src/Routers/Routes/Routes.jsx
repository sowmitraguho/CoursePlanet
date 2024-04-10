import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import LogIn from "../../Pages/Client/LogIn/LogIn";
import Home from "../../Pages/Home/Home";
import Categories from "../../Pages/Categories/Categories";
import Course from "../../Pages/Course/Course";
import SignUp from "../../Pages/Client/SignUp/SignUp";
import TermsAndConditions from "../../Pages/Client/TermsAndConditions/TermsAndConditions";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://courseplanetserver.vercel.app/course`)
            },
            {
                path: '/category/:id',
                element: <Categories></Categories>,
                loader: ({params}) => fetch(`https://courseplanetserver.vercel.app/categories/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <PrivateRouter><Course></Course></PrivateRouter>,
                loader: ({params}) => fetch(`https://courseplanetserver.vercel.app/course/${params.id}`)
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