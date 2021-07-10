import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

export const AppBarTop = () => {


  return (
    <AppBar
    position="fixed"
    >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Persistent drawer
      </Typography>
    </Toolbar>
  </AppBar>
  )
}
