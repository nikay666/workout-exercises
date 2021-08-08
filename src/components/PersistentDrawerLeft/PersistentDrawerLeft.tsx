import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { AppBarTop } from '../AppBarTop/AppBarTop';
import { Sidebar } from '../Sidebar/Sidebar';
import { AppBar, Container, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { IMenuItem } from '../../types/Menu';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },

    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    main: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2),

    },

  }),
);

interface PersistentDrawerLeftProps {
  children: React.ReactNode,
  titles: IMenuItem[]
}

export default function PersistentDrawerLeft({children, titles}: PersistentDrawerLeftProps) {
  const classes = useStyles();
  const location = useLocation()
  const [title, setTitle] = useState('')

  useEffect(() => {
    titles.forEach(item => {
      item.link === location.pathname && setTitle(item.title)
    }, [])
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar/>
      <AppBar
      className={classes.appBarShift}
        position="fixed"
      >
       <Toolbar>
          <Typography variant="h5" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        {children}
      </main>
    </div>
  );
}