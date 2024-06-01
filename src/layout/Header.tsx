import React from "react"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Logo from "../components/Logo"
import NavigationMenu from "../components/NavigationMenu"
import LanguageSelector from "../components/LanguageSelector"
import UserProfileMenu from "../components/UserProfileMenu"
import {Stack} from "@mui/material"

function ResponsiveAppBar() {
   const [anchorElNav, setAnchorElNav] = React.useState<boolean>(false)
   const [anchorElUser, setAnchorElUser] = React.useState<boolean>(false)

   const handleOpenNavMenu = () => {
      setAnchorElNav(true)
   }
   const handleOpen = () => {
      setAnchorElUser(true)
   }

   const handleCloseNavMenu = () => {
      setAnchorElNav(false)
   }

   const handleClose = () => {
      setAnchorElUser(false)
   }

   return (
      <AppBar position="static">
         <Container maxWidth="md">
            <Toolbar
               disableGutters
               sx={{
                  display: "flex",
                  gap: "50px",
                  justifyContent: {xs: "space-between", md: "initial"}
               }}
            >
               <Logo sx={{display: "block"}} />

               <NavigationMenu
                  anchorElNav={anchorElNav}
                  handleOpenNavMenu={handleOpenNavMenu}
                  handleCloseNavMenu={handleCloseNavMenu}
                  handleOpen={handleOpen}
               />

               <Stack
                  direction="row"
                  gap="24px"
                  sx={{display: {xs: "none", md: "flex"}}}
               >
                  <LanguageSelector />

                  <UserProfileMenu
                     anchorElUser={anchorElUser}
                     handleOpenUserMenu={handleOpen}
                     handleClose={handleClose}
                  />
               </Stack>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default ResponsiveAppBar
