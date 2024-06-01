import {
   Box,
   Container,
   SwipeableDrawer,
   IconButton,
   Button
} from "@mui/material"
import {StyledHeaderPageTypography} from "./StyledComponents"
import {FC} from "react"
import {PAGES} from "../utils/constants/header"
import MenuItems from "./MenuItems"
import ProfileSection from "./ProfileSection"
import HeaderSection from "./HeaderSection"
import MobileLanguageSelector from "./MobileLanguageSelector"
import MenuIcon from "../theme/icons/MenuIcon"

interface INavigationMenuProps {
   handleOpenNavMenu: () => void
   handleOpen: () => void
   anchorElNav: boolean
   handleCloseNavMenu: () => void
}

const NavigationMenu: FC<INavigationMenuProps> = ({
   anchorElNav,
   handleOpenNavMenu,
   handleCloseNavMenu,
   handleOpen
}) => {
   return (
      <>
         <Box
            sx={{
               flexGrow: 1,
               display: {xs: "flex", md: "none"},
               justifyContent: "flex-end"
            }}
         >
            <IconButton
               size="large"
               aria-label="menu"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleOpenNavMenu}
               color="inherit"
            >
               <MenuIcon />
            </IconButton>
            <SwipeableDrawer
               anchor="right"
               open={anchorElNav}
               onClose={handleCloseNavMenu}
               onOpen={handleOpenNavMenu}
               PaperProps={{sx: {height: "100%", width: "100%"}}}
            >
               <Container>
                  <HeaderSection
                     handleOpenNavMenu={handleOpenNavMenu}
                     handleCloseNavMenu={handleCloseNavMenu}
                  />
                  <ProfileSection handleOpen={handleOpen} />
                  <MenuItems />
                  <MobileLanguageSelector />
               </Container>
            </SwipeableDrawer>
         </Box>

         <Box
            sx={{flexGrow: 1, display: {xs: "none", md: "flex"}, gap: "30px"}}
         >
            {PAGES.map(page => (
               <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                     my: 2,
                     display: "flex",
                     alignItems: "center",
                     color: "inherit",
                     gap: "10px"
                  }}
               >
                  {page.icon}
                  <StyledHeaderPageTypography
                     className={page.id === 1 ? "active" : ""}
                  >
                     {page.name}
                  </StyledHeaderPageTypography>
               </Button>
            ))}
         </Box>
      </>
   )
}

export default NavigationMenu
