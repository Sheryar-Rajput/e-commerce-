import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SaleGraphs from './SaleGraph';
// import Chart from "../../assets/chart.jpg"
// import PieChart from "../../assets/piechat.jpg"
import BasicTable from "./BasicTable";


function AdminScreen() {
    return (
        <>
            <Stack direction="Colume">
                <Box sx={{ display: "Block", width: "100%" }}>
                    <br />

                    <Box > <Typography variant="h1"  >  Dashboard</Typography> </Box>

                    <br />
                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>

                        <Box sx={{ width: "30%", alignItems: 'center' }}>
                            <Box sx={{ backgroundColor: "gray",padding : 2 }} >
                                <Typography variant='h3' align='center' > Total Sales </Typography>
                                <Box sx={{ display: "flex", marginTop: "5", }}>
                                     <MonetizationOnIcon sx={{ fontSize: 30 }} align='center' />
                                    <Typography variant="h4" > 156667 </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ width: "30%", }}>
                            <Box sx={{ backgroundColor: "gray" }} >
                                <Typography variant="h2"> Total Order </Typography>
                                <Box sx={{ display: "flex", marginTop: "5", }}> <ShoppingCartIcon sx={{ fontSize: 30 }} />
                                    <Typography variant="h4" > 156667 </Typography>
                                </Box>
                            </Box>

                        </Box>

                        <Box sx={{ width: "30%", }}>
                            <Box sx={{ backgroundColor: "gray" }} >
                                <Typography variant='h6'> Total Product </Typography>
                                <Box sx={{ display: "flex", marginTop: "5", }}> <ShoppingBasketIcon sx={{ fontSize: 30 }} />
                                    <Typography variant="h4" > 156667 </Typography>
                                </Box>
                            </Box>

                        </Box>

                    </Box>
                    <br />


                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ display: "block", px: 2 }}>
                            <Box>
                                <Typography> Sales Statistics</Typography>
                                <SaleGraphs/>
                                 {/* <img src={Chart}></img> */}
                            </Box>
                        </Box>

                        <Box sx={{ display: "block", px: 2 }}>
                            <Box>
                                <Typography> Monthly visitor</Typography>
                                {/* <img src={PieChart}></img> */}
                            </Box>
                        </Box>

                    </Box>
                    <br />
                    <Box> <br />
                        <BasicTable/>
                        </Box>
                </Box>

            </Stack>
        </>
    )
}

export default AdminScreen