import { Icon, Theme, List, ListItem, Step, StepContent, StepLabel, ListItemSecondaryAction, makeStyles, createStyles, Button, StepIcon } from '@material-ui/core'
import React, { useState } from 'react'
import { IDoneWorkouts, RatingEmoji } from '../../types/Calendar'
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme: Theme) => 
  createStyles(({
    stepIcon: {
      color: theme.palette.primary.main,
    },

    link: {
      textTransform: 'capitalize',
      textDecoration: 'underline',
      fontWeight: 'normal',
    },
    list: {
      width: '100%'
    },
    chip: {
      marginLeft: theme.spacing(1)
    },
  }))
)


export const CalendarListItem = ({id, date, workoutType, workoutTitle ,rating}: IDoneWorkouts) => {
  const classes = useStyles()


  return (
    <Step active={true}>
           <StepLabel StepIconComponent={Brightness1Icon} className={classes.stepIcon} >{date}</StepLabel>
           <StepContent  >
             <List className={classes.list}>
             <ListItem>
               <Button size='small' color='primary'  className={classes.link} component={Link} to={`/${workoutType}`}>{workoutTitle}</Button>
                <ListItemSecondaryAction>
                <Icon color='primary' >{`${RatingEmoji[rating]}`}</Icon>
                </ListItemSecondaryAction>
               </ListItem>
             </List>
          </StepContent>
         </Step>
  )
}
