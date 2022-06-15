import React from 'react'
import Card from './card'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import image1 from '../assets/p1.jpg'
import image2 from '../assets/p2.jpg'
import image3 from '../assets/p3.jpg'
import image4 from '../assets/p5.jpg'
import image5 from '../assets/p6.jpg'
import image6 from '../assets/p7.webp'
function products() {

    const shoes = [
        { src: image1 },
        { src: image2 },
        { src: image3 },
        { src: image4 },
        { src: image6 },
        { src: image5 }]

    return (

        <Stack direction='column'
            spacing={3}
            justifyContent='center'
            alignItems='center'
            marginTop={10} padding={5}
            sx={{ justifyContent: { sm: 'center' } }} >
            <Typography variant='h2' color='grey'

                sx={{
                    marginBottom: 5,
                    flexGrow: 1,
                    fontFamily: 'arial,sans-serif',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom : 2,
                }} >
               Featured Collection</Typography>
            <Grid spacing={3} container justifyContent='center' >


                {shoes.map((image, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={index}  >
                            <Card src={image.src} />
                        </Grid>
                    )

                })}



            </Grid>


        </Stack>

    )
}

export default products
