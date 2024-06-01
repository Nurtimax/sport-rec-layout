import React from "react"
import {SwipeableDrawer, Stack, Paper} from "@mui/material"
import {styled} from "@mui/system"
import CommonContent from "./CommonContent"

const Puller = styled("div")(() => ({
   width: 100,
   height: 6,
   backgroundColor: "#fff",
   borderRadius: 3
}))

interface DrawerContentProps {
   open: boolean
   onClose: () => void
   onOpen: () => void
}

const DrawerContent: React.FC<DrawerContentProps> = ({
   open,
   onClose,
   onOpen
}) => (
   <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      PaperProps={{sx: {background: "none", height: "75%"}}}
   >
      <Stack alignItems="center" pb={1}>
         <Puller />
      </Stack>
      <Paper sx={{height: "100%", background: "#fff"}}>
         <CommonContent />
      </Paper>
   </SwipeableDrawer>
)

export default DrawerContent
