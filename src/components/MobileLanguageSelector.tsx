import {
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText
} from "@mui/material"
import RussianFlagIcon from "../theme/icons/RussianFlagIcon"
import ArrowDownIcon from "../theme/icons/ArrowDownIcon"

const MobileLanguageSelector = () => (
   <ListItem disablePadding sx={{height: "50px"}}>
      <ListItemButton selected>
         <ListItemIcon sx={{minWidth: "33px"}}>
            <RussianFlagIcon />
         </ListItemIcon>
         <ListItemText
            primary="RU"
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
         <ListItemIcon sx={{minWidth: "33px"}}>
            <ArrowDownIcon />
         </ListItemIcon>
      </ListItemButton>
   </ListItem>
)

export default MobileLanguageSelector
