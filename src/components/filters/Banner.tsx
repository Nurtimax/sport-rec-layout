import {Card, CardMedia} from "@mui/material"
import banner from "../../assets/banner.jpg"

const Banner = () => {
   return (
      <Card>
         <CardMedia
            image={banner}
            sx={{
               aspectRatio: "371/540",
               borderRadius: "inherit"
            }}
         />
      </Card>
   )
}

export default Banner
