import React from 'react'
import { ICalendarDay } from '../../types/Calendar'
import CalendarCol from './CalendarCol'


const days: ICalendarDay[] = [
  {
    date: new Date(),
    check: true
  },
  {
    date: new Date(),
    check: true
  },
  {
    date: new Date(),
    check: false
  },
  {
    date: new Date(),
    check: false
  },
  {
    date: new Date(),
    check: true
  },
  {
    date: new Date(),
    check: false
  },
  {
    date: new Date(),
    check: false
  }
]




export const Calendar = () => {
  const year = 365 / 7
  const array = new Array(Math.floor(year)).fill(1)


  return (
    <svg>
      {
        array.map((_, i) => (
          <CalendarCol days={days} x={i * 20}/>
        ))
      }
    </svg>
  )
}
