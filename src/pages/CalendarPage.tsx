import {  Stepper, Typography } from '@material-ui/core'
import React from 'react'
import { Calendar } from '../components/Calendar'
import { IDoneWorkouts, IDoneWorkoutsByDates } from '../types/Calendar';
import { CalendarList } from '../components/CalendarList';
import { formatDateToUs } from '../utilits/DateFormatter';
import { Step, StepLabel, StepContent } from '@material-ui/core';




const testIventsArray: IDoneWorkouts[] = [
  {
    id: 1124566,
    date: formatDateToUs(new Date(2021, 6, 1)),
    workoutTitle: 'boobs and arms',
    workoutType: 'boobs-and-arms',
    rating: 'normally'
  },
  {
    id: 2345,
    date: formatDateToUs(new Date(2021, 7, 4)),
    workoutTitle: 'legs-and-core',
    workoutType: 'legs and core',
    rating: 'well'
  },
  {
    id: 3423,
    date: formatDateToUs(new Date(2021, 1, 2)),
    workoutTitle: 'streaching 1',
    workoutType: 'streaching-1',
    rating: 'badly'
  },
  {
    id: 42345,
    date: formatDateToUs(new Date(2020, 12, 1)),
    workoutTitle: 'yoga relax',
    workoutType: 'yoga-relax',
    rating: 'great'
  },
  {
    id: 523,
    date: formatDateToUs(new Date(2020, 11, 5)),
    workoutTitle: 'boobs and arms',
    workoutType: 'boobs-and-arms',
    rating: 'normally'
  },
  {
    id: 543,
    date: formatDateToUs(new Date(2020, 11, 5)),
    workoutTitle: 'boobs and arms',
    workoutType: 'boobs-and-arms',
    rating: 'normally'
  },
]

const testIventsArrayDates: IDoneWorkoutsByDates[] = [
  {
    id: 12345123,
    date: `${formatDateToUs(new Date(2021, 6, 1))}`,
    workouts: [{
    id: 1124566,
    date: formatDateToUs(new Date(2021, 6, 1)),
    workoutTitle: 'boobs and arms',
    workoutType: 'boobs-and-arms',
    rating: 'normally'
    }]
  },
  {
    id: 12345,
    date: `${formatDateToUs(new Date(2020, 11, 5))}`,
    workouts: [
      {
        id: 1124566,
        date: formatDateToUs(new Date(2021, 6, 1)),
        workoutTitle: 'boobs and arms',
        workoutType: 'boobs-and-arms',
        rating: 'normally'
      },
      {
        id: 543,
        date: formatDateToUs(new Date(2020, 11, 5)),
        workoutTitle: 'boobs and arms',
        workoutType: 'boobs-and-arms',
        rating: 'normally'
      },
    ]
  }

]


const CalendarPage = () => {
  return (
    <div className='calendar'>
      <Typography component='h1' variant='h2' >Календарь акивности</Typography>
      <Calendar doneWorkouts={testIventsArray} />
      <Typography component='h2' variant='h6'>Активности</Typography>
      <CalendarList doneWorkouts={testIventsArrayDates} />
    </div>
  )
}

export default CalendarPage
