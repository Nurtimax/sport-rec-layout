import {
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText
} from "@mui/material"
import {PAGES} from "../utils/constants/header"

const MenuItems = () => (
   <>
      {PAGES.map(page => (
         <ListItem key={page.id} disablePadding sx={{height: "50px"}}>
            <ListItemButton selected>
               <ListItemIcon sx={{minWidth: "33px"}}>{page.icon}</ListItemIcon>
               <ListItemText
                  primary={page.name}
                  primaryTypographyProps={{
                     sx: {
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: 548,
                        lineHeight: "20px",
                        letterSpacing: "-0.5px",
                        fontVariationSettings: "'slnt' 0"
                     }
                  }}
               />
            </ListItemButton>
         </ListItem>
      ))}
   </>
)

export default MenuItems
