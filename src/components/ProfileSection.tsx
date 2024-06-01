import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material"

interface ProfileSectionProps {
   handleOpen: () => void
}

const ProfileSection: React.FC<ProfileSectionProps> = ({handleOpen}) => (
   <ListItem alignItems="center" onClick={handleOpen}>
      <ListItemAvatar>
         <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText primary="Мой профиль" />
   </ListItem>
)

export default ProfileSection
