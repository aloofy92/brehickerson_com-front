import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams from react-router-dom
import { useDispatch, useSelector } from 'react-redux';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { logout } from '../redux/authSlice';

const pages = [
  { title: 'User Dashboard', path: '/dashboard' },
  { title: 'LandlordReviews', path: '/reviews' },
  { title: 'Landlord Listings', path: '/landlord-listings' },
  { title: 'Search', path: '/search' },
  { title: 'Blogs', path: '/blogs' },
  { title: 'Contact Us', path: '/contact-us' },
  { title: 'About Us', path: '/about-us' },
 // Add this line
];

const settings = ['Profile', 'Account', 'Security', 'Logout'];

function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onMenuClick = (menuItem) => {
    if (menuItem === 'Logout') {
      dispatch(logout());
    }
    menuItem === 'Security' && alert('Security');
  };

  // Access the landlordId from the URL path
  const { landlordId } = useParams();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {/* Rest of the code... */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Rest of the code... */}

          {landlordId && (
            <Button
              component={Link}
              to={`/landlord-listings/${landlordId}`} // Pass the landlordId as a parameter in the URL
              color="inherit"
            >
              Landlord Details
            </Button>
          )}

          {/* Rest of the code... */}

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
