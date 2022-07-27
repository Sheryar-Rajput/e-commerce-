import React from 'react';
import Navbar from "../component/navbar"
import Slider from "../component/slider"
import Footer from "../component/footer"
import Stack from "@mui/material/Stack";
import Grid from '@mui/material/Grid'

import { Typography, Box } from '@mui/material';
import Men1 from "../assets/Men1.jpeg";
import Men2 from "../assets/Men2.jpeg";
import Men3 from "../assets/Men3.jpeg";
import Men4 from "../assets/Men4.jpeg";
import Men5 from "../assets/Men5.jpeg";
import Men6 from "../assets/Men6.jpeg";
import Card from "../component/card";
import Ladies1 from "../assets/Ladies1.jpeg";
import Ladies2 from "../assets/Ladies2.jpeg";
import Ladies3 from "../assets/Ladies3.jpeg";
import Ladies4 from "../assets/Ladies4.jpeg";
import Ladies5 from "../assets/Ladies5.jpeg";
import Ladies6 from "../assets/Ladies6.jpeg";




function ProductShoes() {

  const Menshoes = [
    { src: Men1 },
    { src: Men2 },
    { src: Men3 },
    { src: Men4 },
    { src: Men5 },
    { src: Men6 }

  ]


  const LadiesShoes = [
    { src: Ladies1 },
    { src: Ladies2 },
    { src: Ladies3 },
    { src: Ladies4 },
    { src: Ladies5 },
    { src: Ladies6 }

  ]

  return (
    <>
      <Navbar />
      <Slider />


      <Stack alignItems="center" m={8}>

        <Typography varient="h1"
          sx={{
            borderBottom: 2,
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'sans-serif'
          }}
        >
          Category
        </Typography>

        <Typography
          sx={{
            borderBottom: 2,
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'sans-serif'
          }}>
          MEN Shoes
        </Typography>




        <Grid spacing={3} container justifyContent='center' >


          {Menshoes.map((image, index) => {
            return (<Grid item xs={12} sm={6} md={6} lg={4} key={index}  >
              <Card src={image.src} />
            </Grid>)
          })}

        </Grid>


        <Typography varient="h1" mt="50" > Ladies Shoes</Typography>




        <Grid spacing={3} container justifyContent='center' >


          {LadiesShoes.map((image, index) => {
            return (<Grid item xs={12} sm={6} md={6} lg={4} key={index}  >
              <Card src={image.src} />
            </Grid>)
          })}

        </Grid>



      </Stack>
      <Footer />


    </>
  )
}

export default ProductShoes