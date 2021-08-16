import { ICalendarDay, IDoneWorkouts } from "../types/Calendar"
import { formatDateToUs } from "./DateFormatter"


export const fillCalendar = (workoutsArray: IDoneWorkouts[])=> {
  const yearCout = 364
  const YearMs = 31536000000
  const today =  new Date()
  const yearAgo =  new Date(today.valueOf() - YearMs)


  const ArrayYearDays: ICalendarDay[] = new Array(yearCout).fill(1).map((_, i) => ({
    id: i, 
    date: formatDateToUs(new Date(yearAgo.setDate(yearAgo.getDate() + 1))),
    check: false,
    workouts: []
  }))

  const fillCalendar = (year: ICalendarDay[], workouts: IDoneWorkouts[] ): ICalendarDay[] => {
    const result =  year.map(day => {
      
      const workout = workouts.find(({date}) => {return date === day.date})
      if(workout){
        day.workouts?.push(workout) 
        day.check = true
      }
      return day
    })
    return result
  }

   
  const createColumns = (workouts: IDoneWorkouts[]) => {
    let arr:ICalendarDay[] = []
    const result: Array<ICalendarDay[]> = []
    const fillYear = fillCalendar(ArrayYearDays, workouts )
  
  
    fillYear.forEach((el,i) => {
      arr.push(el)
      if((i + 1) % 7 === 0){
        result.push(arr)
        arr = []
      }
    })
    return result
  }
  
  return createColumns(workoutsArray)

}