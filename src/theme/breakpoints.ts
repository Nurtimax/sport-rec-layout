import {BreakpointsOptions} from "@mui/material"

declare module "@mui/material/styles" {
   export interface BreakpointOverrides {
      md: true
      tn: true
      lg: true
      sm: true
      xl: true
      xs: true
   }
}

export const breakpoints: BreakpointsOptions = {
   values: {
      md: 1160,
      lg: 1640,
      sm: 600,
      tn: 370,
      xl: 1440,
      xs: 0
   }
}
