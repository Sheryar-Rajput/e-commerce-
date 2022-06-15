import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useState } from 'react';
export default function SignUp() {

    const [email_value, setEmailValue] = useState({})
    const navigation = useNavigate()
    const onRegister = async () => {
        try {
            const response = await fetch('http://localhost:5000/user/signup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify({email_value})
                }
            )
            const userData = await response.json()
            console.log(userData)
            navigation('/signin')
        }
        catch (error) {
            console.log(error.message)
        }
    }

    return (

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <div style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <Stack direction='column' spacing={3} alignItems="center" >
                    <Box maxWidth={200} >
                        <img src={Logo} style={{ width: 80, height: 80 }} />
                    </Box>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        color="#202124"
                        sx={{
                            marginBottom: 5,
                            flexGrow: 1,
                            fontFamily: 'arial,sans-serif',
                            fontWeight: 100,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                        }}>
                        Sign Up
                    </Typography>
                    <TextField sx={{ width: { lg: 300, md: 300 } }}
                        id="filled-basic"
                        label="User Name" variant="filled"
                        focused onChange={(e) => {
                            let copyobj = Object.assign({}, email_value)
                            copyobj.name = e.target.value
                            setEmailValue(copyobj)
                        }} />
                    <TextField sx={{ width: { lg: 300, md: 300 } }}
                        id="filled-basic"
                        label="Email" variant="filled"
                        focused onChange={(e) => {
                            let copyobj = Object.assign({}, email_value)
                            copyobj.email = e.target.value
                            setEmailValue(copyobj)
                        }} />
                    <TextField id="filled-basic" sx={{ width: { lg: 300, md: 300 } }}
                        label="Password" type='password'
                        variant="filled" focused onChange={(e) => {
                            let copyobj = Object.assign({}, email_value)
                            copyobj.password = e.target.value
                            setEmailValue(copyobj)
                        }} />
                    <Button variant="contained"
                        onClick={onRegister}  >
                        Register </Button>
                    <Typography
                        variant="text"
                        noWrap
                        component="a"
                        color="#202124"
                        onClick={() => { navigation('/signin') }}
                        sx={{
                            mr: 2,
                        }}>
                        Already have account ? click here for Sign In
                    </Typography>
                </Stack>



            </div>
        </div>



    )
}