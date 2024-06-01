import {FC} from "react"
import {IComment} from "../../types/blog"
import {
   Avatar,
   Box,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Stack,
   Typography
} from "@mui/material"
import CommentList from "./CommentList"

const CommentItem: FC<IComment> = ({answer, comment, user, created}) => {
   return (
      <ListItem sx={{display: "grid"}}>
         <Stack direction="row">
            <ListItemAvatar sx={{minWidth: "51px"}}>
               <Avatar title={user.name} alt={user.name} src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
               sx={{display: "grid", gap: "4px", mt: 0}}
               primaryTypographyProps={{
                  sx: {
                     fontFamily: "Inter",
                     fontSize: "14px",
                     fontWeight: 500,
                     lineHeight: "20px",
                     letterSpacing: "-0.5px",
                     textAlign: "left",
                     color: "#7B7EA5"
                  }
               }}
               primary={user.name}
               secondary={
                  <>
                     <Typography
                        sx={{
                           fontFamily: "Inter",
                           fontSize: "14px",
                           fontWeight: 548,
                           lineHeight: "20px",
                           letterSpacing: "-0.5px",
                           textAlign: "left",
                           fontVariationSettings: "'slnt' 0",
                           color: "#06082C"
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                     >
                        {comment}
                     </Typography>
                     <Stack direction="row" gap="12px" pt="10px">
                        <Typography
                           sx={{
                              fontFamily: "Inter",
                              fontSize: "14px",
                              fontWeight: 500,
                              lineHeight: "20px",
                              letterSpacing: "-0.5px",
                              textAlign: "left",
                              color: "#7B7EA5"
                           }}
                        >
                           {created}
                        </Typography>
                        <Typography
                           sx={{
                              fontFamily: "Inter",
                              fontSize: "14px",
                              fontWeight: 548,
                              lineHeight: "20px",
                              letterSpacing: "-0.5px",
                              textAlign: "left",
                              fontVariationSettings: "'slnt' 0",
                              color: "#06082C"
                           }}
                           component="span"
                           variant="body2"
                           color="text.primary"
                        >
                           Ответить
                        </Typography>
                     </Stack>
                  </>
               }
            />
         </Stack>

         <Box px={2}>
            <CommentList comments={answer} />
         </Box>
      </ListItem>
   )
}

export default CommentItem
