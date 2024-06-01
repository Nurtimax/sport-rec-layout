import {SxProps} from "@mui/material"
import LogoIcon from "../theme/icons/LogoIcon"
import {FC} from "react"

interface ILogoProps {
   sx?: SxProps
}

const Logo: FC<ILogoProps> = ({sx}) => {
   return (
      <LogoIcon
         sx={{
            display: {xs: "none", md: "flex"},
            mr: 1,
            width: 129,
            height: 32,
            ...sx
         }}
      />
   )
}

export default Logo
