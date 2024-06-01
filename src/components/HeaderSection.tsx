import {IconButton, Stack} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import Logo from "./Logo"

interface HeaderSectionProps {
   handleOpenNavMenu: () => void
   handleCloseNavMenu: () => void
}

const HeaderSection: React.FC<HeaderSectionProps> = ({handleCloseNavMenu}) => (
   <Stack
      height={52}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
   >
      <Logo sx={{display: "block"}} />
      <IconButton
         sx={{width: "40px", height: "40px"}}
         onClick={handleCloseNavMenu}
      >
         <CloseIcon sx={{width: 24, height: 24}} />
      </IconButton>
   </Stack>
)

export default HeaderSection
