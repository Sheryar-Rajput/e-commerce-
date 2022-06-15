import React from 'react'
import { Drawer,Box,Typography } from '@mui/material'
import { useState } from 'react'
const Sidedrawer = () => {
//    const [isOpen,setOpen] = useState(props.open)
  return (
    <Drawer anchor='left'  keepMounted >
    <Box>
    <Typography variant='h6'>
    hey
    </Typography>
    </Box>
    
    </Drawer>
      
  )
}

export default Sidedrawer
