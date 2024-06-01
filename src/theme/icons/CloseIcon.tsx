import {SvgIcon} from "@mui/material"

const CloseIcon = () => {
   return (
      <SvgIcon sx={{width: 20, height: 20}}>
         <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M15 5L5 15M5 5L15 15"
               stroke="#9395B8"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </SvgIcon>
   )
}

export default CloseIcon
