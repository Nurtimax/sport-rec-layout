import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layout"
import Home from "../pages/Home"

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: <Home />
         }
      ]
   }
])

export default router
