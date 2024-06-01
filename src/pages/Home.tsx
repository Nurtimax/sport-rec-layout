import {Box, Container, Stack, styled} from "@mui/material"
import Blog from "../components/blog"
import MainFilters from "../components/filters"
import Banner from "../components/filters/Banner"

const StyledCustomGrid = styled(Box)`
   display: grid;
   grid-template-columns: 65.5% 32.5%;
   gap: 2%;
   /* Desktop */
   @media (min-width: 1200px) {
      grid-template-columns: 65.5% 32.5%;
   }

   /* Tablet */
   @media (max-width: 1199px) and (min-width: 768px) {
      grid-template-columns: 60% 38%;
   }

   /* Mobile */
   @media (max-width: 767px) {
      grid-template-columns: 1fr; /* Stack columns on top of each other */
   }
`

const Home = () => {
   return (
      <Container maxWidth="md">
         <StyledCustomGrid pt="26px">
            <Blog />
            <Stack gap={3}>
               <MainFilters />
               <Banner />
            </Stack>
         </StyledCustomGrid>
      </Container>
   )
}

export default Home
