import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import './timer.scss'
import { ProgressRing } from '../ProgressRing/'
import { SelectTime } from './SelectTime'
import { calcMinutes, calcSeconds, formatTime } from './TimerHelpers'
import { Button } from '@material-ui/core'
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';



const getProgressValue = (startTime: number, time: number): number => {
  return ((startTime - time) / startTime * 100 ) + startTime / 100
}
const Timer = () => {
  const [time, setTime] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const minutes = useMemo(() => calcMinutes(time), [time])
  const seconds = useMemo(() => calcSeconds(time), [time])
  const [stop, setStop] = useState(false)
  const [pause, setPause] = useState(false)
  const [progress, setProgress] = useState(0) 


  useEffect(() => {
    const idInterval = setInterval(() => {
      if(!pause){
        setTime(time => time - 1)
        setProgress(((startTime - time) / startTime * 100 ) + startTime / 100)
      }
    }, 1000)
    
    if (stop) setTime(0)

    if(time <= 0){ 
      setProgress(100)
      clearInterval(idInterval)
    }

    return () => clearInterval(idInterval)
  }, [startTime, time, stop, pause])

  const selectHndler = (num: number) => {
    console.log(num)
    setStartTime(num)
    setTime(num)
    setStop(false)
    setProgress(0)
  }

  const pauseHandler = () => setPause(prev => !prev)
  const stopHandler = () => setStop(true)

  return (
    <div className="timer">
        <SelectTime changeHandler={selectHndler} />

        <div className="timer__numbers">
          <span>{formatTime(minutes)}:</span><span>{formatTime(seconds)}</span>
          <ProgressRing radius={150} stroke={5} progress={progress} />
        </div>

        <div className="timer__buttons">
          <Button  
            onClick={pauseHandler}
            type="submit" 
            color="primary" 
            disabled={time ? false : true}
          >{pause ? <PlayArrowIcon fontSize="large" /> : <PauseIcon fontSize="large" />}Pause</Button>
          <Button 
            onClick={stopHandler} 
            type="submit" 
            color="primary" 
            disabled={time ? false : true}
          ><StopIcon fontSize="large" />Stop</Button>
        </div>
       
    </div>
  )
}

export default Timer
