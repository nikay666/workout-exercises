import { Stepper } from '@material-ui/core'
import React from 'react'
import { IDoneWorkouts } from '../../types/Calendar'
import { CalendarListItem } from './CalendarListItem'


interface ICalendarListProps {
  doneWorkouts: IDoneWorkouts[]
}

export const CalendarList = ({doneWorkouts}:ICalendarListProps) => {
  

  return (
  <Stepper orientation='vertical'>
    {
      doneWorkouts.map((workout) => (
        <CalendarListItem 
          key={workout.id}
          {...workout}
        />
      ))
      
    }
  </Stepper>
  )
}
