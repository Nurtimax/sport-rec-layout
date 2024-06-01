import {
   Avatar,
   ListItem,
   ListItemAvatar,
   ListItemIcon,
   ListItemText
} from "@mui/material"
import avatarImage from "../assets/profile-avatar.png"
import ArrowDownIcon from "../theme/icons/ArrowDownIcon"

interface ProfileSectionProps {
   handleOpen: () => void
}

const ProfileSection: React.FC<ProfileSectionProps> = ({handleOpen}) => (
   <ListItem alignItems="center" onClick={handleOpen}>
      <ListItemAvatar>
         <Avatar alt="User Avatar" src={avatarImage} />
      </ListItemAvatar>
      <ListItemText
         primary="Мой профиль"
         primaryTypographyProps={{
            sx: {
               fontFamily: "Inter",
               fontSize: "14px",
               fontWeight: 548,
               lineHeight: "20px",
               letterSpacing: "-0.5px",
               fontVariationSettings: "'slnt' 0",
               color: "#9395B8"
            }
         }}
      />

      <ListItemIcon sx={{minWidth: "33px"}}>
         <ArrowDownIcon />
      </ListItemIcon>
   </ListItem>
)

export default ProfileSection
