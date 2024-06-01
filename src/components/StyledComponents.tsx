import {styled, Typography, IconButton, FormLabel} from "@mui/material"
import MuiPhoneNumber from "material-ui-phone-number-2"

export const StyledHeaderPageTypography = styled(Typography)`
   font-family: Inter;
   font-size: 14px;
   font-weight: 548;
   line-height: 20px;
   letter-spacing: -0.5px;
   text-align: center;
   font-variation-settings: "slnt" 0;
   text-transform: none;

   color: #9395b8;

   &.active {
      color: #06082c;
   }
`

export const StyledProfile = styled(IconButton)`
   background-color: #f1f3f7;
   width: 40px;
   height: 40px;
   border-radius: 10px;
`

export const StyledLanguageTypography = styled(Typography)`
   font-family: Inter;
   font-size: 14px;
   font-weight: 548;
   line-height: 20px;
   letter-spacing: -0.5px;
   text-align: center;
   font-variation-settings: "slnt" 0;
`

export const StyledHeadline = styled(Typography)`
   font-family: Inter;
   font-size: 30px;
   font-weight: 600;
   line-height: 32px;
   letter-spacing: -0.01em;
   text-align: center;

   color: #06082c;
`

export const StyledContentline = styled(Typography)`
   font-family: Inter;
   font-size: 14px;
   font-weight: 500;
   line-height: 20px;
   letter-spacing: -0.5px;
   text-align: center;

   color: #9395b8;
`

export const StyledFormLabel = styled(FormLabel)`
   font-family: Inter;
   font-size: 12px;
   font-weight: 400;
   line-height: 18px;
   text-align: left;

   color: #7b7ea5;
`

export const StyledMuiPhoneNumber = styled(MuiPhoneNumber)`
   background: #f1f3f7;
   border-radius: 10px;

   & .MuiOutlinedInput-notchedOutline {
      border: none;
   }

   & input {
      padding-top: 8.5px;
      padding-bottom: 8.5px;
      color: #9395b8;
   }

   & .MuiButtonBase-root svg {
      width: 20px;
      height: 20px;
   }
`

export const StyledNoAccountTypography = styled(Typography)`
   font-family: Inter;
   font-size: 14px;
   font-weight: 500;
   line-height: 20px;
   letter-spacing: -0.5px;
   text-align: center;
   cursor: pointer;

   color: #9395b8;
`
