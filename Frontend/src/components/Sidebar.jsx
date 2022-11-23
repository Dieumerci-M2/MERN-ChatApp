import { Box, Switch } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SettingsIcon from '@mui/icons-material/Settings';
import Person3Icon from '@mui/icons-material/Person3';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Sidebar = ({mode, setMode}) => {

  return (
    <Box sx={ { display: { xs: 'none', sm: 'block' } } } flex={ 2 } p={ 2 } >
      <Box position='fixed'>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#pages'>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
          <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
         <ListItem disablePadding>
          <ListItemButton component='a' href='#group'>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
          <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
         <ListItem disablePadding>
          <ListItemButton component='a' href='#marketplace'>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
          <ListItemText primary="MarketPlace" />
          </ListItemButton>
        </ListItem>
         <ListItem disablePadding>
          <ListItemButton component='a' href='#friend'>
            <ListItemIcon>
              <Diversity2Icon />
            </ListItemIcon>
          <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
         <ListItem disablePadding>
          <ListItemButton component='a' href='#setting'>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
         <ListItem disablePadding>
          <ListItemButton component='a' href='#profile'>
            <ListItemIcon>
              <Person3Icon />
            </ListItemIcon>
          <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
         <ListItem disablePadding>
          <ListItemButton component='a' href='#profile'>
            <ListItemIcon>
              <Brightness4Icon />
            </ListItemIcon>
              <Switch onChange={ e =>setMode(mode === 'light' ? 'dark' : 'light' ) } />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar