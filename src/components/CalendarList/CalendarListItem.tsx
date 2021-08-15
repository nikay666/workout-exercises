import { Theme, List, ListItem,  makeStyles, createStyles, ListSubheader, Divider } from '@material-ui/core'
import React from 'react'
import { IDoneWorkoutsByDates, RatingEmoji } from '../../types/Calendar'
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { CalendarListSubItem } from './CalendarListSubItem';


const useStyles = makeStyles((theme: Theme) => 
  createStyles(({
    subtitle: {
      color: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 0,
      marginLeft: '-10px',
      gap: '10px'
    },
    list: {
      width: '100%'
    }
  }))
)


export const CalendarListItem = ({id, date, workouts}: IDoneWorkoutsByDates) => {
  const classes = useStyles()

  return (
    <>
    <ListItem >     
      <List subheader={<ListSubheader className={classes.subtitle} ><Brightness1Icon />{date}</ListSubheader>} className={classes.list}>
        {workouts.map(workout => <CalendarListSubItem  key={workout.id} {...workout} />)}
      </List>
    </ListItem>
    <Divider/>
    </>
  )
}
