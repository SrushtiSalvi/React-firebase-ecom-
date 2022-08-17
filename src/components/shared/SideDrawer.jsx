import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const categories = ['x', 'y', 'z'];
const categories1 = ['a', 'b', 'c'];

const list = () => {
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {categories.map((category, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {categories1.map((category, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const SideDrawer = () => {
  return (
    <div>
      <List>
        {categories.map((category, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {categories1.map((category, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideDrawer;
