import { Icon, Theme, List, ListItem, Step, StepContent, StepLabel, ListItemSecondaryAction, makeStyles, createStyles, Button } from '@material-ui/core'
import React from 'react'
import { RatingEmoji } from '../../types/Calendar'
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
    }
  }))
)


export const CalendarListItem = () => {
  const classes = useStyles()


  return (
    <Step active={true}>
           <StepLabel className={classes.stepIcon} StepIconComponent={Brightness1Icon} >6 march 2020</StepLabel>
           <StepContent>
             <List className={classes.list}>
             <ListItem>
               <Button size='small' color='primary'  className={classes.link} component={Link} to='/timer'>Workout 'cheast and boobbs'</Button>
                <ListItemSecondaryAction>
                <Icon color='primary'>{RatingEmoji.well}</Icon>
                </ListItemSecondaryAction>
               </ListItem>
             </List>
           </StepContent>
         </Step>
  )
}
