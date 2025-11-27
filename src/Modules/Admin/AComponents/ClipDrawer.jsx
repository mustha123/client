import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';

const drawerWidth = 240;

export default function ClipDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={"/admin/AdminLogin"}>
                  <ListItemIcon>
                  <InboxIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Admin Login" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={"/admin/dashboard"}>
                  <ListItemIcon>
                  <InboxIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={"/admin/viewuser"}>
                  <ListItemIcon>
                  <GroupIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Manage user" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to={"/admin/ViewCategory"}>
                
                  <ListItemIcon>
                  <CategoryIcon/> 
                  </ListItemIcon>
                  <ListItemText primary="Manage Category" />
                </ListItemButton>
              </ListItem>
          </List>
         
              <ListItem disablePadding>
                <ListItemButton component={Link} to={"/admin/addproduct"}>
                
                  <ListItemIcon>
                  <CategoryIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Add product" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to={"/admin/viewproduct"}>
                
                  <ListItemIcon>
                  <CategoryIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="View product" />
                </ListItemButton>
              </ListItem>

        
         
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}
