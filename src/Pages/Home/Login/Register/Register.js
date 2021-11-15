import React from 'react';
import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match ');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
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
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            variant="standard"
                            name="name"

                            onBlur={handleOnBlur} />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur} />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            variant="standard"
                            name="password"
                            onBlur={handleOnBlur} />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            variant="standard"
                            name="password2"
                            onBlur={handleOnBlur} />
                        <Button sx={{ width: '75%', m: 1, bgcolor: 'info.main', color: "common.white" }} varient="contained" type="submit">Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Already registered? Please Login</Button></NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Your Account Created Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;