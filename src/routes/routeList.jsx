import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import MyProfile from "../pages/MyProfile"
import UserProfile from "../pages/UserProfile"
import ProtectedRoute from "./ProtectedRoute"

export const routeList = [
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: '/myprofile',
        element: (
            <ProtectedRoute>
                <MyProfile />
            </ProtectedRoute>
        ),
    },
    {
        path: '/userprofile/:userId',
        element: (
            <ProtectedRoute>
                <UserProfile />
            </ProtectedRoute>
        ),
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]