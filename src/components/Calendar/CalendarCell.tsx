import { createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      fill: theme.palette.primary.main,
      rx: 2,
      ry: 2,
      width: '15px',
      height: '15px',
      boxShadow: theme.shadows[3]
    },
    empty: {
      fill: theme.palette.grey[700]
    },
  })
)

interface ICalendarCell {
  check: boolean,
  width: number,
  x: number,
  y: number,
  date: Date,
  exercise?: object
}

const CalendarCell = ({check, x, y, width,  date}: ICalendarCell) => {
  const classes = useStyles()

  return (
    <rect data-date={date} width={width} height={width}  className={`${classes.root} ${!check && classes.empty}`} x={x} y={y} />
  )
}

export default CalendarCell
