import React from 'react';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AdminList from '../component/AdminList';
import MainDash from '../component/MainDash';
import AdminNavbar from '../component/AdminNavbar';


function AdminDashboard() {
  return (
    <>
      <Stack direction='column'  >
        <Box sx={{ display: "flex" }}>
{/* <AdminNavbar/> */}
          <Box sx={{ width: "15%" }}>
            <AdminList />
          </Box>

          <Box sx={{ width:{ lg : '85%', md : "100%" , sm : "100%"   }, }}>
            <MainDash />
          </Box>
        </Box>



      </Stack>
    </>
  )
}

export default AdminDashboard