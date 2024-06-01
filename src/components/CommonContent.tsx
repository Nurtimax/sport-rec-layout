import {Stack, Typography, Button, Container, FormLabel} from "@mui/material"
import SLogoIcon from "../theme/icons/SLogoIcon"
import MuiPhoneNumber from "material-ui-phone-number-2"

const CommonContent = () => (
   <Container>
      <Stack gap={4}>
         <Stack width="100%" justifyContent="center" pt={2} alignItems="center">
            <SLogoIcon />
         </Stack>
         <Stack gap={2}>
            <Typography variant="h4" textAlign="center">
               Вход на платформу
            </Typography>
            <Typography textAlign="center">
               Код будет автоматически отправлен на Ваш номер телефона с помощью
               SMS
            </Typography>
         </Stack>
         <Stack gap={3}>
            <Stack>
               <FormLabel>Номер телефона</FormLabel>
               <MuiPhoneNumber
                  defaultCountry="ru"
                  onlyCountries={["ru", "kz", "kg"]}
                  onChange={() => {}}
                  required
                  variant="outlined"
                  disableAreaCodes
                  masks={{kg: "+... (...) ... ..."}}
                  InputProps={{
                     sx: {
                        borderRadius: "10px"
                     }
                  }}
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
            <Typography textAlign="center">Нет аккаунта?</Typography>
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
