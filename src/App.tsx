import {RouterProvider} from "react-router-dom"
import router from "./routes"
import Theme from "./theme"

function App() {
   return (
      <Theme>
         <RouterProvider router={router} />
      </Theme>
   )
}

export default App
