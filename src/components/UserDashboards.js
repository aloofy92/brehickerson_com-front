import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Typography } from '@mui/material';

const UserDashboard = () => {
  const users = useSelector((state) => state.users);

  useEffect(() => {
    // Fetch user data or perform any necessary actions
  }, []);

  return (
    <Container maxWidth="lg">
      <Box mt={5}>
        <Typography variant="h1">
          Welcome to Your Dashboard, {users.firstname}
        </Typography>
        {/* Add additional user dashboard content */}
      </Box>
    </Container>
  );
};

export default UserDashboard;
