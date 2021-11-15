import { ResetTvTwoTone } from '@mui/icons-material';
import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const { user, loginUser, isLoading, authError } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();


    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src="https://assets.applyboard.com/assets/session/login-eadf850accc5cb732e5af77f3318cdd89d2de72e00d0a3054b48ab60a11ff7f1.svg" alt="" />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 8 }} variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            name="email"
                            type="email"
                            onChange={handleOnChange} />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            variant="standard"
                            name="password"
                            onChange={handleOnChange} />
                        <Button sx={{ width: '75%', m: 1, bgcolor: 'info.main', color: "common.white" }} varient="contained" type="submit">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New User? Please Register</Button></NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}


                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;