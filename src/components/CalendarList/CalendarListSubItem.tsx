import { Button, createStyles, Icon, ListItem, ListItemSecondaryAction, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import { IDoneWorkouts, RatingEmoji } from '../../types/Calendar';


const useStyles = makeStyles((theme: Theme) => 
  createStyles(({
    link: {
      textTransform: 'capitalize',
      textDecoration: 'underline',
      fontWeight: 'normal',
    },
    chip: {
      marginLeft: theme.spacing(1)
    },
    listBorder: {
      borderLeft: `1px solid ${theme.palette.primary.main}`
    }
  }))
)



export const CalendarListSubItem = ({id, workoutType, workoutTitle, rating}: IDoneWorkouts) => {
  const classes = useStyles()

  return (
    <ListItem className={classes.listBorder} key={id}>
      <Button size='small' color='primary'  className={classes.link} component={Link} to={`/${workoutType}`}>{workoutTitle}</Button>
      <ListItemSecondaryAction>
        <Icon color='primary' >{`${RatingEmoji[rating]}`}</Icon>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
