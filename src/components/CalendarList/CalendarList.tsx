import { List } from '@material-ui/core'
import React from 'react'
import { IDoneWorkoutsByDates } from '../../types/Calendar'
import { CalendarListItem } from './CalendarListItem'


interface ICalendarListProps {
  doneWorkouts: IDoneWorkoutsByDates[]
}

export const CalendarList = ({doneWorkouts}:ICalendarListProps) => {
  

  return (
  <List >
    {
      doneWorkouts.map((workout) => (
        <CalendarListItem 
          key={workout.id}
          {...workout}
        />
      ))
    }
  </List>
  )
}
