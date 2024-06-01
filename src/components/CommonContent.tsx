import {Stack, Button, Container} from "@mui/material"
import SLogoIcon from "../theme/icons/SLogoIcon"
import {
   StyledContentline,
   StyledFormLabel,
   StyledHeadline,
   StyledMuiPhoneNumber,
   StyledNoAccountTypography
} from "./StyledComponents"

const CommonContent = () => (
   <Container>
      <Stack gap={4}>
         <Stack gap={3}>
            <Stack
               width="100%"
               justifyContent="center"
               pt={2}
               alignItems="center"
            >
               <SLogoIcon />
            </Stack>
            <Stack gap={2}>
               <StyledHeadline>Вход на платформу</StyledHeadline>
               <StyledContentline>
                  Код будет автоматически отправлен на Ваш номер телефона с
                  помощью SMS
               </StyledContentline>
            </Stack>
         </Stack>

         <Stack gap={3}>
            <Stack>
               <StyledFormLabel>Номер телефона</StyledFormLabel>
               <StyledMuiPhoneNumber
                  defaultCountry="ru"
                  onlyCountries={["ru", "kz", "kg"]}
                  onChange={() => {}}
                  required
                  variant="outlined"
                  disableAreaCodes
                  masks={{kg: "+... (...) ... ..."}}
               />
            </Stack>

            <Button
               variant="contained"
               sx={{
                  borderRadius: "10px",
                  background: "#06082C",
                  color: "white",
                  height: "40px",
                  padding: "10px 24px"
               }}
            >
               Получить код
            </Button>
         </Stack>

         <Stack gap={2}>
            <StyledNoAccountTypography>Нет аккаунта?</StyledNoAccountTypography>
            <Button
               variant="outlined"
               sx={{
                  background: "#F1F3F7 !important",
                  borderRadius: "10px",
                  color: "#06082C",
                  height: "40px"
               }}
            >
               Зарегистрироваться
            </Button>
         </Stack>
      </Stack>
   </Container>
)

export default CommonContent
