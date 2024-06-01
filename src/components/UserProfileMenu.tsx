import {Box, useTheme, useMediaQuery} from "@mui/material"
import UserIcon from "../theme/icons/UserIcon"
import {StyledProfile} from "./StyledComponents"
import {FC} from "react"
import DialogContent from "./DialogContent"
import DrawerContent from "./DrawerContent"

interface IUserProfileMenuProps {
   anchorElUser: boolean
   handleOpenUserMenu: () => void
   handleClose: () => void
}

const UserProfileMenu: FC<IUserProfileMenuProps> = ({
   anchorElUser,
   handleOpenUserMenu,
   handleClose
}) => {
   const theme = useTheme()
   const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

   return (
      <Box sx={{flexGrow: 0}}>
         <StyledProfile onClick={handleOpenUserMenu} sx={{p: 0}}>
            <UserIcon />
         </StyledProfile>
         {fullScreen ? (
            <DrawerContent
               open={anchorElUser}
               onClose={handleClose}
               onOpen={handleOpenUserMenu}
            />
         ) : (
            <DialogContent open={anchorElUser} onClose={handleClose} />
         )}
      </Box>
   )
}

export default UserProfileMenu
