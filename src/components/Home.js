import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
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
          <Box mt={5}>
            <Typography variant="h1">Share Your Landlord Experiences</Typography>
            <Typography variant="h4" color="textSecondary">
              The platform you need to rate and review your landlords.
            </Typography>
          </Box>

          <Box mt={5}>
            <Grid container spacing={3}>
              {featuredLandlords.map((landlord) => (
                <Grid item xs={12} sm={6} md={4} key={landlord.id}>
                  <Card>
                    {/* Add landlord image here */}
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {landlord.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {landlord.description}
                      </Typography>
                      {/* Add additional landlord details */}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box mt={5} textAlign="center">
            <>
              <Button variant="contained" color="primary" href="/login">
                Login
              </Button>
              <Button variant="contained" color="secondary" href="/register">
                Register
              </Button>
            </>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Home;
