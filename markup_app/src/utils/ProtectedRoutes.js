import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoutes(){
   return(
    localStorage.getItem("isLogin")?<Outlet/>:<Navigate to="/login"/>
   )

}