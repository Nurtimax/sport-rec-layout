import React from "react"
import {Dialog, IconButton, Paper, Slide} from "@mui/material"
import {TransitionProps} from "@mui/material/transitions"
import CommonContent from "./CommonContent"
import CloseIcon from "../theme/icons/CloseIcon"

const Transition = React.forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement
   },
   ref: React.Ref<unknown>
) {
   return <Slide direction="up" ref={ref} {...props} />
})

interface DialogContentProps {
   open: boolean
   onClose: () => void
}

const DialogContent: React.FC<DialogContentProps> = ({open, onClose}) => (
   <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="tn"
   >
      <IconButton
         aria-label="close"
         onClick={onClose}
         sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
         }}
      >
         <CloseIcon />
      </IconButton>
      <Paper sx={{height: "100%", background: "#fff", py: 3}}>
         <CommonContent />
      </Paper>
   </Dialog>
)

export default DialogContent
