import React from 'react'
import { createStyles, Icon, ListItem, ListItemText, makeStyles, Theme } from '@material-ui/core';
import { NavLink, NavLinkProps } from 'react-router-dom';
import './sidebar.scss'

interface ISidebarListItemProps {
  title: string
  link: string
  icon?: string

}

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    icon: {
      marginRight: theme.spacing(1)
    },
    activeLink: { 
      backgroundColor: theme.palette.primary.main
    }
  
  })
)



export const SidebarListItem = ({title, link, icon}:ISidebarListItemProps) => {
  const classes = useStyles()
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<NavLinkProps, 'to'>>((itemProps, ref) => (
        <NavLink 
          to={link} 
          ref={ref} 
          {...itemProps } 
          activeClassName={classes.activeLink}
        />
      )),
    [link, classes.activeLink],
  );

  

  return (
    <ListItem button component={renderLink}>
      <Icon  className={classes.icon} >{icon}</Icon>
      <ListItemText primary={title} />
    </ListItem>
  )
}
