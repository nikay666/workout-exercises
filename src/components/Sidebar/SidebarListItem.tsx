import React from 'react'
import { createStyles, Icon, List, ListItem, ListItemText, makeStyles, Theme } from '@material-ui/core';
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
  
  })
)



export const SidebarListItem = ({title, link, icon}:ISidebarListItemProps) => {
  const classes = useStyles()
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<NavLinkProps, 'to'>>((itemProps, ref) => (
        <NavLink to={link} ref={ref} {...itemProps} />
      )),
    [link],
  );

  

  return (
    <ListItem button component={renderLink}>
      <Icon  className={classes.icon} >{icon}</Icon>
      <ListItemText primary={title} />
    </ListItem>
  )
}
