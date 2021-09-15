export const checkTimeValue = (stringTime: string): number => {
  const time = parseInt(stringTime)
  return isNaN(time) || time > 59 || time < 0 ? 0 : time 
}

export const calcMinutes = (time: number): number => Math.trunc(time/60)
export const calcSeconds = (time: number):number => Math.round(time -  Math.trunc(time/60) * 60)


export const formatTime = (num: number): string => {
  return num >= 10 ? `${num}` : `0${num}`
}


export const getCalculateTime = (min: string, sec: string): number => {
  return checkTimeValue(min) * 60 + checkTimeValue(sec)
}