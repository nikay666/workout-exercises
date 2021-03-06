import { createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { useMemo } from 'react'
import { fillCalendar } from '../../utilits/fillCalendar'
import { IDoneWorkouts } from '../../types/Calendar'
import CalendarCol from './CalendarCol'




const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      width: '100%',
    },
  })
)



interface ICaledarProps {
  doneWorkouts: IDoneWorkouts[]
}


export const Calendar = ({doneWorkouts}: ICaledarProps) => {
  const classes = useStyles()
  const days =  useMemo(() => fillCalendar(doneWorkouts), [doneWorkouts])

  return (
    <svg className={classes.root}>
      {
        days.map((el, i) => <CalendarCol key={i} days={el} x={i * 15}/> )
      }
    </svg>
  )
}
