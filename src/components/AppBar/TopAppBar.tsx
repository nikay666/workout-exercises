import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { DRAWER_WIDTH } from '../../utilits/constants';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }}
    )
)

interface ITopAppBarProps {
  title: string
}

export const TopAppBar = ({title}: ITopAppBarProps) => {
  const classes = useStyles()

  return (
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
  )
}
