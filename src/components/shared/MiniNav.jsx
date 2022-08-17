import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

import SideDrawer from './SideDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import categories from '../../data/categories.json';
import Checkbox from '@mui/material/Checkbox';

import { useAuth } from '../../contexts/AuthContext';
import { async } from '@firebase/util';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CategoriesList = () => {
  return (
    <Box
      sx={{
        width: '25%',
        height: '100%',
        border: 1,
        overflowY: 'scroll',
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: 'azure',
      }}
      role="presentation">
      <Box
        sx={{
          width: 'full',
          backgroundColor: '#2E3B55',
          padding: 1,
          color: 'white',
        }}>
        Hello John
        {/* {categories[category].map((subcategory) => {
                return <div>{subcategory}</div>;
              })} */}
      </Box>
      {/* <List>
        {Object.keys(categories).map((category, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      {Object.keys(categories).map((category, index) => (
        <Accordion>
          <AccordionSummary
            key={index}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>{category}</Typography>
          </AccordionSummary>
          {categories[category].map((subcategory) => (
            <AccordionDetails
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <Typography
                style={{
                  paddingTop: '10px',
                }}>
                {subcategory}
              </Typography>
              <Checkbox {...label} />
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </Box>
  );
};

const MiniNav = () => {
  const { logout } = useAuth();
  let navigate = useNavigate();

  const [error, setError] = useState();
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      navigate('/');
    } catch {
      setError('Failed to log out');
    }
  };

  return (
    <div style={{}}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ bgcolor: '#2E3B55', cursor: 'pointer' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
              onClick={handleOnClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              Fresh
            </Typography>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              Mobiles
            </Typography>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              Prime
            </Typography>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              Amazon Pay
            </Typography>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              Gift Cards
            </Typography>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              Buy Again
            </Typography>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              Gift Ideas
            </Typography>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              Health, Household & Personal Care
            </Typography>
            {localStorage.getItem('access-token') ? (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" onClick={() => navigate('/login')}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {open && <CategoriesList />}
    </div>
  );
};

export default MiniNav;
