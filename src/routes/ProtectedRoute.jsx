import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({childern}) => {
    const token = localStorage.getItem('access_token')

    if (!token) {
        return <Navigate to={'/login'}/>
    }

    return <>{childern || <Outlet />}</>
}