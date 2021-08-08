import {  Typography, Stepper, Step, StepLabel, StepContent, makeStyles, createStyles, Theme, Button, Chip, List, ListItem, Divider, ListItemSecondaryAction } from '@material-ui/core'
import React from 'react'
import { Calendar } from '../components/Calendar'
import Brightness1Icon from '@material-ui/icons/Brightness1';
import {Link} from 'react-router-dom' 

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

const CalendarPage = () => {
  const classes = useStyles()

  return (
    <div className='calendar'>
      <Typography component='h1' variant='h2' >Календарь акивности</Typography>

      <Calendar/>
      <Typography component='h2' variant='h6'>Активности</Typography>
       <Stepper orientation='vertical'>
         <Step active={true}>
           <StepLabel className={classes.stepIcon} StepIconComponent={Brightness1Icon} >6 march 2020</StepLabel>
           <StepContent>
              <Button size='small' color='primary'  className={classes.link} component={Link} to='/timer'>Workout 'cheast and boobbs'</Button>
           </StepContent>
         </Step>
         <Step active={true}>
           <StepLabel className={classes.stepIcon} StepIconComponent={Brightness1Icon} >6 march 2020</StepLabel>
           <StepContent>
              <Button size='small' color='primary' className={classes.link} component={Link} to='/timer'>Workout 'cheast and boobbs'</Button>
           </StepContent>
         </Step>
         <Step active={true}>
           <StepLabel className={classes.stepIcon} StepIconComponent={Brightness1Icon} >6 march 2020</StepLabel>
           <StepContent>
             <List className={classes.list}>
             <ListItem>
               <Button size='small' color='primary'  className={classes.link} component={Link} to='/timer'>Workout 'cheast and boobbs'</Button>
                <ListItemSecondaryAction>
                <Chip className={classes.chip} label='boobs' color='primary' variant='outlined' />
                <Chip className={classes.chip}  label='legs' color='primary' variant='outlined' />
                </ListItemSecondaryAction>
               </ListItem>
               <Divider/>
               <ListItem>
               <Button size='small' color='primary'  className={classes.link} component={Link} to='/timer'>Workout 'cheast and boobbs'</Button>
                <ListItemSecondaryAction>
                <Chip className={classes.chip} label='boobs' color='primary' variant='outlined' />
                <Chip className={classes.chip}  label='legs' color='primary' variant='outlined' />
                </ListItemSecondaryAction>
               </ListItem>
             </List>
 
           </StepContent>
         </Step>
       </Stepper>

    </div>
  )
}

export default CalendarPage
