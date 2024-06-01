import {Components} from "@mui/material"
import {BaseTheme} from "../../types/theme/overrides"

const AppBar = (): Components<BaseTheme> => {
   return {
      MuiAppBar: {
         defaultProps: {color: "primary"}
      }
   }
}

export default AppBar
