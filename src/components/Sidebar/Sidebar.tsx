import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import { Badge, createStyles, List, makeStyles, Theme, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { SidebarListItem } from './SidebarListItem';


interface IMenuItem {
  id: number,
  title: string,
  link: string,
  icon: string,
}

export const menuItems: IMenuItem[] = [
  {
    id: 0,
    title: 'Home Page',
    link: '/home',
    icon: 'home',
  },
  {
    id: 1,
    title: 'Calendar',
    link: '/calendar',
    icon: 'date_range'
  },
  {
    id: 2,
    title: 'Timer',
    link: '/timer',
    icon: 'timer'
  },
  {
    id: 3,
    title: 'Workouts list',
    link: '/workouts',
    icon: 'fitness_center'
  },
  {
    id: 4,
    title: 'Exercises list',
    link: '/exercises',
    icon: 'format_list_bulleted'
  },
  {
    id: 5,
    title: 'Settings',
    link: '/settings',
    icon: 'settings'
  }
]

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    avatar: {
      margin: '5%',
      display: 'flex',
      gap: '10px'
    },
    badge: {
        backgroundColor:` ${theme.palette.success.light}`
    }
  })
)


export const Sidebar = () => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.avatar}>
      <Badge 
        overlap='circle'
        classes={{
          dot: classes.badge
        }}
        variant='dot'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Avatar/> 
      </Badge>
      <Typography variant='subtitle1' component='p'>Nika Y</Typography>
      </div>

      <Divider/>
      <List>
        {
          menuItems.map(({id, title, icon, link}) => (
            <SidebarListItem 
              key={id}  
              title={title}
              icon={icon}
              link={link}
            />
          ))
        }
        </List>
    </Drawer>
  )
}
