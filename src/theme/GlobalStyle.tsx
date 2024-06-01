// material
import {GlobalStyles as GlobalThemeStyles, Theme} from "@mui/material"

// ----------------------------------------------------------------------

export default function GlobalStyles({theme}: {theme: Theme}) {
   return (
      <GlobalThemeStyles
         styles={{
            "*": {
               margin: 0,
               boxSizing: "border-box"
            },
            html: {
               width: "100%",
               height: "100%",
               WebkitOverflowScrolling: "touch"
            },
            body: {
               width: "100%",
               height: "100%",
               background: theme.palette.background.paper
            },
            "#root": {
               width: "100%",
               height: "100%"
            }
         }}
      />
   )
}
