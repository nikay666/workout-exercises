import { makeStyles, TextField, Theme, createStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    input: {
      width: 150
    }
  })
)

interface ITimerInputsProps {
  minutes: string , 
  changeMinutes: (value: string) => void,
  seconds: string,
  changeSeconds:  (value: string) => void,

}

export const TimerInputs = ({minutes, seconds, changeMinutes, changeSeconds}: ITimerInputsProps) => {
  const classes = useStyles()

  const minutesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault() 
    changeMinutes(e.target.value)
  }

  const secondsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault() 
    changeSeconds(e.target.value)
  }

  return (
    <div className="timer__inputs">
    <TextField 
      className={`timer__input ${classes.input}` }
      type="number" 
      label="Minutes"
      name="minutes" 
      id="minutes" 
      variant="outlined"
      placeholder='0'
      value={minutes}
      inputProps={{
        'max': '59',
        'min': '0'
      }}
      onChange={minutesHandler}
    />
    <TextField 
      className={`timer__input ${classes.input}` }
      type="number" 
      label="Seconds"
      name="seconds" 
      id="seconds" 
      variant="outlined"
      placeholder='0'
      inputProps={{
        'max': '59',
        'min': '0'
      }}
      value={seconds}
      onChange={secondsHandler}
    />
  </div>
  )
}


