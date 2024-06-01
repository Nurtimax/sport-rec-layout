import {ThemeProvider, createTheme} from "@mui/material"
import {FC, ReactNode} from "react"
import {PALETTE} from "./palette"
import GlobalStyles from "./GlobalStyle"
import {breakpoints} from "./breakpoints"

interface IThemeProps {
   children: ReactNode
}

const Theme: FC<IThemeProps> = ({children}) => {
   const theme = createTheme({
      palette: PALETTE,
      breakpoints,
      shape: {
         borderRadius: 20
      }
   })

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles theme={theme} />
         {children}
      </ThemeProvider>
   )
}

export default Theme
