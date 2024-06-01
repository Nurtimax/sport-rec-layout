import {
   Card,
   CardContent,
   CardHeader,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText
} from "@mui/material"
import GridIcon from "../../theme/icons/GridIcon"
import CertificateIcon from "../../theme/icons/CertificateIcon"
import VideoRecorderIcon from "../../theme/icons/VideoRecorderIcon"
import AwardIcon from "../../theme/icons/AwardIcon"

const filterOptions = [
   {icon: <GridIcon />, text: "Все", selected: true},
   {icon: <CertificateIcon />, text: "Результаты соревнований"},
   {icon: <VideoRecorderIcon />, text: "Видео"},
   {icon: <AwardIcon />, text: "Достижения"}
]

const MainFilters = () => {
   return (
      <Card>
         <CardHeader
            title="Фильтр ленты"
            sx={{py: "12px", pl: "20px", pt: "17px"}}
            titleTypographyProps={{
               sx: {
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "26px",
                  letterSpacing: "-0.7px",
                  textAlign: "left"
               }
            }}
         />

         <CardContent sx={{py: "12px", px: "20px", pl: "15px", pt: "5px"}}>
            <List>
               {filterOptions.map((option, index) => (
                  <ListItem key={index} disablePadding>
                     <ListItemButton
                        selected={option.selected}
                        sx={{
                           py: "4px",
                           borderRadius: "10px",
                           "&.Mui-selected": {
                              background: "rgba(0, 0, 0, 0.04)",
                              "& .MuiTypography-root": {
                                 color: "#06082C"
                              }
                           }
                        }}
                     >
                        <ListItemIcon sx={{minWidth: "33px"}}>
                           {option.icon}
                        </ListItemIcon>
                        <ListItemText
                           primary={option.text}
                           primaryTypographyProps={{
                              sx: {
                                 fontFamily: "Inter",
                                 fontSize: "14px",
                                 fontWeight: 548,
                                 lineHeight: "20px",
                                 letterSpacing: "-0.5px",
                                 fontVariationSettings: "'slnt' 0",
                                 color: "#7B7EA5"
                              }
                           }}
                        />
                     </ListItemButton>
                  </ListItem>
               ))}
            </List>
         </CardContent>
      </Card>
   )
}

export default MainFilters
