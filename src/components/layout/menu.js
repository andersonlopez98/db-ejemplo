import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import {Link} from 'react-router-dom';


export const menuItems = (
  <div>
    <ListItem to="/" component={Link}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem to="/clientes" component={Link}>
      <ListItemIcon>
        <PeopleAltOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItem>
    <ListItem to="/productos" component={Link}>
      <ListItemIcon>
        <ShoppingBagOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>
    
  </div>
);
