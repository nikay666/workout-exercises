import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Sidebar } from '../Sidebar/Sidebar';
import { IMenuItem } from '../../types/Menu';
import { useLocation } from 'react-router-dom';
import { TopAppBar } from '../AppBar/TopAppBar';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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
      <TopAppBar title={title} />
      <main className={classes.main}>
        {children}
      </main>
    </div>
  );
}