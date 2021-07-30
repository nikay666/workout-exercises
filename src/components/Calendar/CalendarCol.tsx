import React from 'react'
import { ICalendarCol } from '../../types/Calendar'
import CalendarCell from './CalendarCell'



const getY = (id: number, margin: number): number => id * margin



const CalendarCol = ({x, days}: ICalendarCol) => {
  const width = 10
  const margin = 20

  return (
    <g>
      { days?.map(({date, check}, id) => {
        return <CalendarCell  
          width={width} 
          date={date} 
          check={check} 
          x={x} 
          y={getY(id, margin)}
        /> 
      })
      }
    </g>
  )
}

export default CalendarCol
