import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { Badge, createStyles, List, makeStyles, Theme, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { SidebarListItem } from './SidebarListItem';
import { menuItems } from '../../App';


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
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
      gap: theme.spacing(1)
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
