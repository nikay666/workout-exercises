import React from 'react'
import { useState } from 'react'
import { Button } from '@material-ui/core'
import { getCalculateTime } from './TimerHelpers'
import { TimerInputs } from './TimerInputs'

interface SelectTimeProps {
  changeHandler: (value: number) => void,
}

export const SelectTime = ({changeHandler}: SelectTimeProps) => {
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  const [disabled, setDisabled] = useState(true)


  const minutesHandler = (value: string) => {
    parseInt(value) > 60 ?  setMin('0') :  setMin(value)
    setDisabled(false)
  }

  const secondsHandler = (value: string) => {
    parseInt(value) > 60 ?  setSec('0') : setSec(value)
    setDisabled(false)
  }

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const value = getCalculateTime(min, sec)
    changeHandler(value)
    setMin('')
    setSec('')
    setDisabled(true)
  }

  return (
    <div className="timer__select-time">
    <h2>Select time:</h2>
    <form id="form"  name="form" className="timer__form" >
      <TimerInputs
        minutes={min}
        seconds={sec}
        changeMinutes={minutesHandler}
        changeSeconds={secondsHandler}
      />
      <Button 
        onClick={submitHandler} 
        type="submit" 
        color="primary" 
        variant="outlined"
        disabled={disabled}
      >Start</Button>
    </form>
  </div>
  )
}
