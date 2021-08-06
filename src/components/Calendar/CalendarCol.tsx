import React from 'react'
import { ICalendarCol } from '../../types/Calendar'
import CalendarCell from './CalendarCell'



const getY = (id: number, margin: number): number => id * margin



const CalendarCol = ({x, days}: ICalendarCol) => {
  const width = 10
  const margin = 15

  return (
    <g>
      { days?.map(({date, check, workouts}, id) => {
        return <CalendarCell  
          key={id}
          width={width} 
          date={date} 
          check={check} 
          x={x} 
          y={getY(id, margin)}
          workouts={workouts}
        /> 
      })
      }
    </g>
  )
}

export default CalendarCol
