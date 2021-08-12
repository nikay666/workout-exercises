import {  SvgIcon, Typography, Stepper, Step, StepLabel, StepContent, makeStyles, createStyles, Theme, Button, Chip, List, ListItem, Divider, ListItemSecondaryAction, Icon } from '@material-ui/core'
import React from 'react'
import { Calendar } from '../components/Calendar'
import { IDoneWorkouts } from '../types/Calendar';
import { CalendarList } from '../components/CalendarList';
import { formatDateToUs } from '../utilits/DateFormatter';


const testIventsArray: IDoneWorkouts[] = [
  {
    id: 1124566,
    date: formatDateToUs(new Date(2021, 6, 1)),
    woukoutType: 1,
    rating: 'normally'
  },
  {
    id: 2345,
    date: formatDateToUs(new Date(2021, 7, 4)),
    woukoutType: 1,
    rating: 'well'
  },
  {
    id: 3423,
    date: formatDateToUs(new Date(2021, 1, 2)),
    woukoutType: 1,
    rating: 'badly'
  },
  {
    id: 42345,
    date: formatDateToUs(new Date(2020, 12, 1)),
    woukoutType: 1,
    rating: 'great'
  },
  {
    id: 523,
    date: formatDateToUs(new Date(2020, 11, 5)),
    woukoutType: 1,
    rating: 'normally'
  },
]



const CalendarPage = () => {


  return (
    <div className='calendar'>
      <Typography component='h1' variant='h2' >Календарь акивности</Typography>
      <Calendar doneWorkouts={testIventsArray} />
      <Typography component='h2' variant='h6'>Активности</Typography>
      <CalendarList doneWorkouts={testIventsArray} />

    </div>
  )
}

export default CalendarPage
