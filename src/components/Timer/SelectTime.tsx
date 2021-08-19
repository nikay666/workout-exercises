import React from 'react'
import { useState } from 'react'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { checkTimeValue } from './TimerHelpers'

interface SelectTimeProps {
  changeHandler: Function
}

export const SelectTime = ({changeHandler}: SelectTimeProps) => {
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)

  const minutesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setMin(checkTimeValue(parseInt(e.target.value)))
  }

  const secondsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSec(checkTimeValue(parseInt(e.target.value)))
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMin(0)
    setSec(0)
    changeHandler(min * 60 + sec)
  }

  return (
    <div className="timer__select-time">
    <h2>Select time:</h2>

    <form id="form"  name="form" className="timer__form" onSubmit={submitHandler} >
      <div className="timer__inputs">
        <TextField 
          className="timer__input" 
          type="number" 
          label="Minutes"
          name="minutes" 
          id="minutes" 
          variant="outlined"
          value={min}
          onChange={minutesHandler}
        />
        <TextField 
          className="timer__input" 
          type="number" 
          label="Seconds"
          name="seconds" 
          id="seconds" 
          variant="outlined"
          value={sec}
          onChange={secondsHandler}
        />
      </div>
      <Button type="submit" color="primary" variant="outlined">Start</Button>
      </form>
  </div>
  )
}
