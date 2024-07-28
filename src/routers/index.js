import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/login";
import Forgotpassword from "../pages/forgotpassword";
import Signup from "../pages/signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:'',
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'forgot-password',
                element:<Forgotpassword/>
            },
            {
                path:'sign-up',
                element:<Signup/>
            }

        ]
      },
    ]);

export default router