import { Navigate, Outlet } from "react-router-dom"
import {getSavedLocally} from './utils'
export default function ProtectedRoutes(){
  const status = getSavedLocally("isLogin")
   return(
    status?<Outlet/>:<Navigate to="/login"/>
   )

}