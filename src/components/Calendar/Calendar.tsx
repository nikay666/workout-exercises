import { createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { useMemo } from 'react'
import { fillCalendar } from '../../hooks/useFillCalendar'
import { IDoneWorkouts } from '../../types/Calendar'
import { formatDateToUs } from '../../utilits/DateFormatter'
import CalendarCol from './CalendarCol'


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


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      width: '100%',
    },
  })
)




export const Calendar = () => {
  const classes = useStyles()
  const days =  useMemo(() => fillCalendar(testIventsArray), [testIventsArray])

  return (
    <svg className={classes.root}>
      {
        days.map((el, i) => <CalendarCol key={i} days={el} x={i * 15}/> )
      }
    </svg>
  )
}
