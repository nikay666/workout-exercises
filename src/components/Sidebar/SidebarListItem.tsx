import React from 'react'
import { Icon, List, ListItem, ListItemText } from '@material-ui/core';
import { NavLink, NavLinkProps } from 'react-router-dom';
import './sidebar.scss'

interface ISidebarListItemProps {
  title: string
  link: string
  icon?: string

}



export const SidebarListItem = ({title, link, icon}:ISidebarListItemProps) => {

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<NavLinkProps, 'to'>>((itemProps, ref) => (
        <NavLink to={link} ref={ref} {...itemProps} />
      )),
    [link],
  );

  

  return (
    <ListItem button component={renderLink}>
      <Icon className="sidebar__icon" >{icon}</Icon>
      <ListItemText primary={title} />
    </ListItem>
  )
}
