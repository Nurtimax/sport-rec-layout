import {Stack} from "@mui/material"
import RussianFlagIcon from "../theme/icons/RussianFlagIcon"
import ArrowDownIcon from "../theme/icons/ArrowDownIcon"
import {StyledLanguageTypography} from "./StyledComponents"

const LanguageSelector = () => {
   return (
      <Stack direction="row" alignItems="center" gap="20px">
         <Stack direction="row" alignItems="center" gap="6px">
            <RussianFlagIcon />
            <Stack direction="row" alignItems="center" gap="4px" pt="4px">
               <StyledLanguageTypography>RU</StyledLanguageTypography>
               <ArrowDownIcon />
            </Stack>
         </Stack>
      </Stack>
   )
}

export default LanguageSelector
