import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Box } from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';
import Logo from './Logo';

const Header = () => {
  return (
    <AppBar position='fixed' elevation={0}>
      <Box bgcolor='background'>
        <Toolbar>
          <Box 
            pt={2} 
            pb={2} 
            display='flex' 
            height={80} 
            justifyContent='space-between' 
            flex='1'
            gbcolor='background'
          >
            <Box mr='auto' display='flex'>
              <Logo />
            </Box>
            <IconButton 
              edge="end" 
              color="inherit" 
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <IconButton 
              edge="end" 
              color="inherit" 
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Header;