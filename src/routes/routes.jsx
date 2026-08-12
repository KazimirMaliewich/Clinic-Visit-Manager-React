import { createBrowserRouter } from "react-router-dom"
import { Home } from "../Pages/HomePage/HomePage"
import { Signin } from "../Pages/SigninPage/SigninPage"
import { SignUp } from "../Pages/SignupPage/SignUpPage"
import { NotFound } from "../Pages/NotFoundPage/NotFoundPage"
import { CardList } from "../Components/CardList/CardList"
import { Profile } from "../Pages/ProfilePage/ProfilePage"
import { PrivateRoute } from "./PrivateRoute"
import { Cards } from "../Pages/CardsPage/CardsPage"
import Layout from "../Components/Layout/LAyout"
import { CreateCardPage } from "../Pages/CreateCardPage/CreateCardPage"
import { CardDetailsPage } from "../Pages/CardDetailsPage/CardDetailsPage"
const router = createBrowserRouter([

    {
        path: "/", element: <Layout />, children: [
            {
                index: true,
                element: <Home />,
            },
            { path: "/signin", element: <Signin /> },
            { path: "/signup", element: <SignUp /> },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/profile',
                        element: <Profile />,
                    },
                    {
                        path: '/cards',
                        element: <Cards />
                    },
                    {
                        path: '/createcard',
                        element: <CreateCardPage />
                    },
                    {
                    path: '/cards/:id',
                    element: <CardDetailsPage/>
                    }
                ],
            },
        ]
    },

    { path: "/*", element: <NotFound /> }
]);

export default router