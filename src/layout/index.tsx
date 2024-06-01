import {Outlet} from "react-router-dom"
import ResponsiveAppBar from "./Header"

const MainLayout = () => {
   return (
      <div>
         <ResponsiveAppBar />
         <Outlet />
      </div>
   )
}

export default MainLayout
