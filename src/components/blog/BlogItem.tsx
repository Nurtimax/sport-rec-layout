import {
   Box,
   Card,
   CardContent,
   CardHeader,
   CardMedia,
   Divider,
   Grid,
   Stack,
   Typography,
   styled
} from "@mui/material"
import {FC} from "react"
import {IBlog} from "../../types/blog"
import ViewIcon from "../../theme/icons/ViewIcon"
import {intlFormat} from "../../utils/constants/blog"
import MessageSquareIcon from "../../theme/icons/MessageSquareIcon"
import CommentList from "./CommentList"
import {Swiper, SwiperSlide} from "swiper/react"
import {HashNavigation, Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const StyledViewTypography = styled(Typography)`
   font-family: Inter;
   font-size: 14px;
   font-weight: 500;
   line-height: 20px;
   letter-spacing: -0.5px;
   text-align: left;

   color: #7b7ea5;
`

const BlogItem: FC<IBlog> = ({
   description,
   images,
   name,
   todo,
   viewCount,
   comments
}) => {
   return (
      <Card>
         <CardHeader
            subheader={todo}
            subheaderTypographyProps={{
               sx: {
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  textAlign: "left"
               }
            }}
            sx={{py: "10px", pt: "24px", px: 3}}
         />
         <CardHeader
            title={name}
            sx={{py: "10px", pt: "1px", px: 3}}
            titleTypographyProps={{
               fontFamily: "Inter",
               fontSize: "20px",
               fontWeight: 600,
               lineHeight: "26px",
               letterSpacing: "-0.699999988079071px",
               textAlign: "left"
            }}
         />
         <CardHeader
            sx={{pb: "10px", px: 3, pt: "7px"}}
            subheader={description}
            subheaderTypographyProps={{
               sx: {
                  fontFamily: "Inter",
                  fontSize: "13.1px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  letterSpacing: "-0.5px",
                  textAlign: "left"
               }
            }}
         />

         <CardContent sx={{px: 3, width: "100%"}}>
            <Box display={{sm: "block", xs: "none"}}>
               <Grid container spacing="10px">
                  {images.map(image => (
                     <Grid item key={image} xs={4}>
                        <CardMedia
                           image={image}
                           sx={{
                              aspectRatio: "232 / 200",
                              borderRadius: "14px"
                           }}
                        />
                     </Grid>
                  ))}
               </Grid>
            </Box>

            <Box
               display={{sm: "none", xs: "block"}}
               sx={{
                  ".swiper-slide": {
                     width: "100% !important"
                  }
               }}
            >
               <Swiper
                  className="mySwiper"
                  hashNavigation={{
                     watchState: true
                  }}
                  pagination={{
                     clickable: true
                  }}
                  spaceBetween={10}
                  modules={[HashNavigation, Pagination]}
               >
                  {images.map(image => (
                     <SwiperSlide key={image} style={{width: "100%"}}>
                        <CardMedia
                           image={image}
                           sx={{
                              width: "100%",
                              aspectRatio: "232 / 200",
                              borderRadius: "14px"
                           }}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </Box>
         </CardContent>
         <CardContent sx={{py: "1px", px: 3}}>
            <Stack direction="row" gap="25px" pb="17px">
               <Stack direction="row" gap="6px">
                  <ViewIcon />
                  <StyledViewTypography>
                     {intlFormat(viewCount)}
                  </StyledViewTypography>
               </Stack>
               <Stack direction="row" gap="6px">
                  <MessageSquareIcon />
                  <StyledViewTypography>{comments.length}</StyledViewTypography>
               </Stack>
            </Stack>

            <Divider />
         </CardContent>
         <CardContent sx={{pl: "9px", pt: 0}}>
            <CommentList comments={comments} />
         </CardContent>
      </Card>
   )
}

export default BlogItem
