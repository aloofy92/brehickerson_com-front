import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, Typography, Button } from '@mui/material';
import { authCheck, logout } from '../redux/authSlice';
import UserDashboard from './UserDashboards'; // Import the UserDashboard component

const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);
  const users = useSelector((state) => state.users);
  const featuredLandlords = useSelector((state) => state.featuredLandlords) || [];

  useEffect(() => {
    dispatch(authCheck());
  }, [auth]);

  return (
    <Container maxWidth="lg">
      {auth ? (
        // If the user is authenticated, display the UserDashboard component
        <UserDashboard />
      ) : (
        <>
          <Box mt={5} textAlign="center">
            <Typography variant="h1">Share Your Landlord Experiences</Typography>
            <Typography variant="h4" color="textSecondary">
              The platform you need to rate and review your landlords.
            </Typography>
          </Box>

          <Box mt={5} textAlign="center">
            <Button variant="contained" color="primary" href="/login">
              Login
            </Button>
            <Button variant="contained" color="secondary" href="/register">
              Register
            </Button>
          </Box>

          <Box mt={5} textAlign="center">
            <img src="images/manwithkeys.jpg" alt="Landlord" style={{ width: '50%', display: 'block', margin: '0 auto' }} />
          </Box>

        </>
      )}
    </Container>
  );
};

export default Home;

