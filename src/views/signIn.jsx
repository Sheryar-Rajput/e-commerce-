import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography, Box } from '@mui/material';
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function SignIn() {
    const navigation = useNavigate()
    const [email_value, setEmailValue] = useState({})
    const onLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/user/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify({email_value})
                }
            )
            const userData = await response.json()
            console.log(userData)
            navigation('/dashboard')
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
                            marginBottom: 10,
                            flexGrow: 1,
                            fontFamily: 'arial,sans-serif',
                            fontWeight: 100,
                            letterSpacing: '.1rem',
                            color: 'inherit',


                        }}
                    >
                        Sign In
                    </Typography>
                    <TextField sx={{ width: { lg: 300, md: 300 } }}
                        id="outlined-basic"
                        label="Email" variant="outlined"
                        focused onChange={(e) => {
                            let copyobj = Object.assign({}, email_value)
                            copyobj.email = e.target.value
                            setEmailValue(copyobj)
                        }} />
                    <TextField id="outlined-basic" sx={{ width: { lg: 300, md: 300 } }}
                        label="Password" type='password'
                        variant="outlined" focused onChange={(e) => {
                            let copyobj = Object.assign({}, email_value)
                            copyobj.password = e.target.value
                            setEmailValue(copyobj)
                        }} />
                    <Button variant="contained"
                    onClick={onLogin}   >
                    Login </Button>
                    <Typography
                        variant="text"
                        noWrap
                        component="a"
                        color="#202124"
                        onClick={() => { navigation('/signup') }}
                        sx={{
                            mr: 2,
                        }}
                    >
                        Does not have account ? click here for Sign Up
                    </Typography>
                </Stack>



            </div>
        </div>



    )
}