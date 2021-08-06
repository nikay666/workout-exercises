import { createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { ICalendarCell } from '../../types/Calendar'


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      fill: theme.palette.primary.main,
      rx: 2,
      ry: 2,
  
      boxShadow: theme.shadows[3],
      cursor: 'pointer'
    },
    empty: {
      fill: theme.palette.grey[700]
    },
  })
)


const CalendarCell = ({check, x, y, width, date, workouts}: ICalendarCell) => {
  const classes = useStyles()

  const mouseOverHadlere = (e: React.MouseEvent<SVGRectElement>) => {
    console.log( e.currentTarget.dataset.date)
    console.log( e.currentTarget.dataset.date)
  }


  return (
    <rect 
      data-date={date} 
      width={width} 
      height={width}  
      className={`${classes.root} ${!check && classes.empty}`} 
      x={x} 
      y={y} 
      data-count={workouts?.length || 0}
      onClick={mouseOverHadlere}
    />
  )
}

export default CalendarCell
