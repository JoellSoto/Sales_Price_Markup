import { Navigate, Outlet } from "react-router-dom"
import Global from "./Global";

export default function ProtectedRoutes(){
   return(
     Global.isLogin?<Outlet/>:<Navigate to="/login"/>
   )

}