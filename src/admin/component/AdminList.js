import React from 'react'
import Stack from "@mui/material/Stack"
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Typography from '@mui/material/Typography';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import Link from '@mui/material/Link'


function AdminList() {
    return (
        <>
            <Stack direction="colume" sx={{display : { sm : "none" , md : 'none', lg : 'flex'  }}} >
                <MenuList sx={{justifyContent:"center"}} >
                    <Link href='/order'  underline='none'  >
                        <MenuItem>
                            <ListItemIcon>
                                <LocalGroceryStoreIcon sx={{ fontSize: 30 }}/>
                                <Typography variant="h6">  Order </Typography>
                            </ListItemIcon>
                        </MenuItem>
                    </Link>
                    
                    <Link href='/customer'  underline='none'  >
                        <MenuItem>
                            <ListItemIcon>
                                <PeopleAltIcon sx={{ fontSize: 30 }} />
                                <Typography variant="h6">  Customer </Typography>
                            </ListItemIcon>
                        </MenuItem>
                    </Link>
                    
                    <Link href='/addproduct'  underline='none'  >
                        <MenuItem>
                            <ListItemIcon>
                                <InventoryIcon sx={{ fontSize: 30 }} />
                                <Typography variant="h6">  Product </Typography>
                            </ListItemIcon>
                        </MenuItem>
                    </Link>


                </MenuList>
            </Stack>
        </>
    )
}

export default AdminList